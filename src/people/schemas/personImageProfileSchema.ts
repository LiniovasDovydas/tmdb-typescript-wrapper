import { z } from "zod";

export const personImageProfileSchema = z.object({
  aspect_ratio: z.number().optional(),
  file_path: z.string().optional(),
  height: z.number().optional(),
  iso_639_1: z.string().optional(),
  vote_average: z.number().optional(),
  vote_count: z.number().optional(),
  width: z.number().optional(),
});

export type PersonImageProfileSchema = z.infer<typeof personImageProfileSchema>;
