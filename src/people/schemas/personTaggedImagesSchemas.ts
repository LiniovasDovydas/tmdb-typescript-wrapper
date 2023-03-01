import { z } from "zod";
import { languageSchemaQuery } from "../../schemas/languageSchema";
import { personImageProfileSchema } from "./personImageProfileSchema";

export const personTaggedImagesPathParamsSchema = z.object({
  person_id: z.number({ required_error: "person_id is required" }).min(0),
});

export const personTaggedImagesQuerySchema = z.object({
  page: z.number().min(1).optional(),
  language: languageSchemaQuery.optional(),
});

export const personTaggedImagesResponseSchema = z.object({
  id: z.number().min(0).optional(),
  page: z.number().min(1).optional(),
  results: z.array(personImageProfileSchema).optional(),
  total_pages: z.number().min(1).optional(),
  total_results: z.number().min(0).optional(),
});

export type PersonTaggedImagesPathParamsSchema = z.infer<
  typeof personTaggedImagesPathParamsSchema
>;

export type PersonTaggedImagesResponseSchema = z.infer<
  typeof personTaggedImagesResponseSchema
>;

export type PersonTaggedImagesQuerySchema = z.infer<
  typeof personTaggedImagesQuerySchema
>;
