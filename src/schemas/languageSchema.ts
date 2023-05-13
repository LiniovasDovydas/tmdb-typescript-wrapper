import { z } from "zod";

export const languageSchemaQuery = z
  .string()
  .min(2)
  .regex(new RegExp("([a-z]{2})-([A-Z]{2})"));

export const languageSchema = z.object({ language: languageSchemaQuery });

export type LanguageSchema = z.infer<typeof languageSchemaQuery>;
export type LanguageSchemaQuery = z.infer<typeof languageSchema>;
