import { z } from "zod";

export const castSchema = z.object({
  character: z.string().optional(),
  credit_id: z.string().optional(),
  release_date: z.string().optional(),
  vote_count: z.number().optional(),
  video: z.boolean().optional(),
  adult: z.boolean().optional(),
  vote_average: z.number().optional(),
  title: z.string().optional(),
  genre_ids: z.array(z.number()).optional(),
  original_language: z.string().optional(),
  original_title: z.string().optional(),
  popularity: z.number().optional(),
  id: z.number().optional(),
  backdrop_path: z.string().optional(),
  overview: z.string().optional(),
  poster_path: z.string().optional(),
});

export type CastSchema = z.infer<typeof castSchema>;
