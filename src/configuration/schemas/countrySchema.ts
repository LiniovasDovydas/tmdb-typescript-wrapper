import { z } from "zod";

export const countrySchema = z.object({
  iso_3166_1: z.string(),
  english_name: z.string(),
});

export type CountrySchema = z.infer<typeof countrySchema>;
