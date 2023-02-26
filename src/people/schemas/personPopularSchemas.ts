import { z } from "zod";
import { languageSchema } from "../../schemas/languageSchema";

export const personKnownForSchema = z.object({
  adult: z.boolean().optional(),
  backdrop_path: z.string().optional(),
  genre_ids: z.array(z.number().min(0)).optional(),
  id: z.number().min(0).optional(),
  media_type: z.enum(["movie", "tv"]).optional(),
  original_language: z.string().optional(),
  original_title: z.string().optional(),
  overview: z.string().optional(),
  poster_path: z.string().optional(),
  release_date: z.string().optional(),
  title: z.string().optional(),
  video: z.boolean().optional(),
  vote_average: z.number().min(0).max(10).optional(),
  vote_count: z.number().min(0).optional(),
  first_air_date: z.string().optional(),
  name: z.string().optional(),
  origin_country: z.array(z.string()).optional(),
});

export const personPopularSchema = z.object({
  name: z.string().optional(),
  adult: z.boolean().optional(),
  id: z.number().min(0).optional(),
  profile_path: z.string().optional(),
  popularity: z.number().min(0).optional(),
  known_for: z.array(personKnownForSchema).optional(),
});

export const personPopularQuerySchema = z.object({
  page: z.number().min(1).max(1000).optional(),
  language: languageSchema.optional(),
});

export const personPopularResponseSchema = z.object({
  page: z.number().min(1).optional(),
  total_results: z.number().min(0).optional(),
  total_pages: z.number().min(1).optional(),
  results: z.array(
    z.object({
      adult: z.boolean().optional(),
    }),
  ).optional(),
});

export type PersonPopularSchema = z.infer<typeof personPopularSchema>;
export type PersonKnownForSchema = z.infer<typeof personKnownForSchema>;
export type PersonPopularQuerySchema = z.infer<typeof personPopularQuerySchema>;

export type PersonPopularResponseSchema = z.infer<
  typeof personPopularResponseSchema
>;
