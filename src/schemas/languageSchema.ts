import { z } from "zod";

export const languageSchema = z.string().min(2).regex(new RegExp('([a-z]{2})-([A-Z]{2})'));

export type LanguageSchema = z.infer<typeof languageSchema>;
