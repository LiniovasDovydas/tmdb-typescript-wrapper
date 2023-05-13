import { createRequestHandler, createRequestNamespace } from "../utils";

import {
  watchProviderQuerySchema,
  watchProvidersResponseSchema,
} from "./schemas/watchProvidersSchemas";

import {
  watchProvidersAvailableQuerySchema,
  watchProvidersAvailableResponseSchema,
} from "./schemas/watchProvidersAvailableSchemas";

export const watchProvidersRequestHandlers = createRequestNamespace(
  (apiKey) => ({
    getWatchProvidersAvailableRegions: createRequestHandler(
      apiKey,
      "watch/providers/regions",
      {
        querySchema: watchProvidersAvailableQuerySchema,
        responseSchema: watchProvidersAvailableResponseSchema,
      }
    ),
    getMovieWatchProviders: createRequestHandler(
      apiKey,
      "watch/providers/movie",
      {
        querySchema: watchProviderQuerySchema,
        responseSchema: watchProvidersResponseSchema,
      }
    ),
    getTVWatchProviders: createRequestHandler(apiKey, "watch/providers/tv", {
      querySchema: watchProviderQuerySchema,
      responseSchema: watchProvidersResponseSchema,
    }),
  })
);
