import { z } from "zod";
import { languageSchemaQuery } from "../../schemas/languageSchema";
import { personDetailsResponseSchema } from "./personDetailsSchemas";

export const personLatestQuerySchema = z.object({
  language: languageSchemaQuery.optional(),
});

export const personLatestResponseSchema = personDetailsResponseSchema;

export type PersonLatestQuerySchema = z.infer<typeof personLatestQuerySchema>;
export type PersonLatestResponseSchema = z.infer<
  typeof personLatestResponseSchema
>;
