import { createRequestHandler } from "../utils";
import { personDetailsResponseSchema, personDetailsPathParamsSchema, personDetailsQuerySchema } from "./schemas";

export function peopleRequestHandlers(apiKey: string) {
  return {
    getPersonDetails: createRequestHandler(
      apiKey, 
      'person/{person_id}',
      {
        responseSchema: personDetailsResponseSchema,
        pathSchema: personDetailsPathParamsSchema,
        querySchema: personDetailsQuerySchema,
      },
    )
  };
}
