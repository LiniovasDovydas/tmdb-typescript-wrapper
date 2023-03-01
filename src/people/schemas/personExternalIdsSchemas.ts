import { z } from "zod";
import { languageSchemaQuery } from "../../schemas/languageSchema";

export const personExternalIdsPathParamsSchema = z.object({
  person_id: z.number({ required_error: "person_id is required" }).min(0),
});

export const personExternalIdsQuerySchema = z.object({
  language: languageSchemaQuery.optional(),
});

export const personExternalIdsResponseSchema = z.object({
  id: z.number().min(0).optional(),
  imdb_id: z.string().nullable().optional(),
  facebook_id: z.string().nullable().optional(),
  instagram_id: z.string().nullable().optional(),
  twitter_id: z.string().nullable().optional(),
  freebase_id: z.string().nullable().optional(),
  freebase_mid: z.string().nullable().optional(),
  tvrage_id: z.number().nullable().optional(),
});

export type PersonExternalIdsPathParamsSchema = z.infer<
  typeof personExternalIdsPathParamsSchema
>;

export type PersonExternalIdsResponseSchema = z.infer<
  typeof personExternalIdsResponseSchema
>;

export type PersonExternalIdsQuerySchema = z.infer<
  typeof personExternalIdsQuerySchema
>;
