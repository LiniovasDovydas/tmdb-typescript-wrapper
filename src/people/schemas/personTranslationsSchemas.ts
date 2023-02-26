import { z } from "zod";
import { languageSchema } from "../../schemas/languageSchema";

export const personTranslationsPathParamsSchema = z.object({
  person_id: z.number({ required_error: "person_id is required" }).min(0),
});

export const personTranslationsQuerySchema = z.object({
  language: languageSchema.optional(),
});

export const personTranslationsResponseSchema = z.object({
  id: z.number().min(0).optional(),
  translations: z.array(
    z.object({
      iso_3166_1: z.string().min(2).optional(),
      iso_639_1: z.string().min(2).optional(),
      name: z.string().optional(),
      english_name: z.string().optional(),
      data: z.object({
        biography: z.string().optional(),
      }),
    })
  ).optional(),
});

export type PersonTranslationsPathParamsSchema = z.infer<
  typeof personTranslationsPathParamsSchema
>;

export type PersonTranslationsResponseSchema = z.infer<
  typeof personTranslationsResponseSchema
>;

export type PersonTranslationsQuerySchema = z.infer<
  typeof personTranslationsQuerySchema
>;
