import { z } from "zod";
import fetch from "cross-fetch";
import { printZodErrorGroup } from "./printZodErrorGroup";

type RequestHandlerInit = Omit<RequestInit, 'body'>;

type RequestHandlerProps<P, Q, B, R> = {
  pathSchema?: z.Schema<P>;
  querySchema?: z.Schema<Q>;
  bodySchema?: z.Schema<B>;
  responseSchema: z.Schema<R>;
}

const BASE_URL = "https://api.themoviedb.org/3";

export function createRequestHandler<P, Q, B, R>(
  apiKey: string,
  url: string,
  schemas: RequestHandlerProps<P, Q, B, R>,
  defaultRequestOptions?: RequestHandlerInit,
) {
  const { pathSchema, querySchema, bodySchema, responseSchema } = schemas;

  async function requestHandler(
    props: P & Q & B extends object ? P & Q & B : {},
    options?: RequestHandlerInit,
  ): Promise<R> {
    const params = props;
    
    /** Parse and validate values with provided schemas */
    const parsedBody = bodySchema?.parse(params);
    const parsedPath = pathSchema?.parse(params);
    const parsedQuery = querySchema?.parse(params);

    /** Replace path keys in provided url */
    const parsedUrl = parsedPath ? url.replace(/{.*?}/g, (key) => {
      const pathKey = key.replace(/{|}/g, '');
      return parsedPath[pathKey];
    }) : url;

    /** Build query for the request */
    const query = new URLSearchParams();
    query.append('api_key', apiKey);

    /** Append parsed query params if defined */
    if (parsedQuery) {
      Object.entries(parsedQuery).forEach(([key, value]) => {
        query.append(key, value as string);
      });
    }

    /** Merge default and provided request options */
    const mergedOptions = {
      ...defaultRequestOptions,
      ...options,
    };

    /** Make the request to the TMDb */
    const response = await fetch(`${BASE_URL}/${parsedUrl}?${query.toString()}`, {
      ...mergedOptions,
      headers: {
        'Content-Type': 'application/json',
        ...mergedOptions?.headers,
      },
      method: mergedOptions?.method || parsedBody ? 'POST' : 'GET',
      body: parsedBody
        ? JSON.stringify(parsedBody)
        : undefined,
    });
  
    /** Parse data and validate model */
    const data = await response.json();
    const parsedData = responseSchema.safeParse(data);

    /** Some property was not returned, inform but do not fail */
    if (parsedData.success === false) {
      printZodErrorGroup(parsedData, `Response schema is invalid for "${BASE_URL}/${parsedUrl}".`);
      return data as Promise<R>;
    }
    
    return parsedData.data;
  };

  return requestHandler;
}
