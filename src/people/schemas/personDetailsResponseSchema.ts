import { z } from "zod";

export const personDetailsResponseSchema = z.object({
  id: z.number({ required_error: "Person ID is missing." }),
  name: z.string({ required_error: "Person name is missing." }),
  adult: z.boolean().optional(),
  biography: z.string().optional(),
  popularity: z.number().optional(),
  imdb_id: z.string().nullable().optional(),
  homepage: z.string().nullable().optional(),
  birthday: z.string().nullable().optional(),
  deathday: z.string().nullable().optional(),
  known_for_department: z.string().optional(),
  gender: z.number().min(0).max(3).optional(),
  also_known_as: z.array(z.string()).optional(),
  profile_path: z.string().nullable().optional(),
  place_of_birth: z.string().nullable().optional(),
});

export type PersonDetailsResponseSchema = z.infer<typeof personDetailsResponseSchema>;
