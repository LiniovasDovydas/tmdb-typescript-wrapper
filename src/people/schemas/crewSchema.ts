import { z } from "zod";

export const crewSchema = z.object({
  id: z.number().optional(),
  department: z.string().optional(),
  original_language: z.string().optional(),
  original_title: z.string().optional(),
  job: z.string().optional(),
  overview: z.string().optional(),
  vote_count: z.number().optional(),
  video: z.boolean().optional(),
  poster_path: z.string().optional(),
  backdrop_path: z.string().optional(),
  title: z.string().optional(),
  popularity: z.number().optional(),
  genre_ids: z.array(z.number()).optional(),
  vote_average: z.number().optional(),
  adult: z.boolean().optional(),
  release_date: z.string().optional(),
  credit_id: z.string().optional(),
});

export type CrewSchema = z.infer<typeof crewSchema>;
