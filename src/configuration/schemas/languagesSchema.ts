import { z } from "zod";

export const languagesSchema = z.object({
  iso_639_1: z.string(),
  english_name: z.string(),
  name: z.string(),
});

export type LanguagesSchema = z.infer<typeof languagesSchema>;
