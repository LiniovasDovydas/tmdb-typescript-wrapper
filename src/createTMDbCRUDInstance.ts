import { createRequestHandler } from "./utils";
import { configurationSchema } from "./configuration/schemas";

import {
  personDetailsPathParamsSchema,
  personDetailsResponseSchema,
  personDetailsQuerySchema,
} from "./people/schemas";

export function createTMDbCRUDInstance(apiKey: string) {
  return {
    // #region Configuration
    getConfiguration: createRequestHandler('configuration', apiKey, {
      responseSchema: configurationSchema,
    }),
    // #region Person
    getPersonDetails: createRequestHandler('person/{person_id}', apiKey, {
      responseSchema: personDetailsResponseSchema,
      pathSchema: personDetailsPathParamsSchema,
      querySchema: personDetailsQuerySchema,
    }),
    // #endregion
  };
}
