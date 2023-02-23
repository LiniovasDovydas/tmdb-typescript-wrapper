import { z } from "zod";

/** Sub-requests for person details */
export const personAppendToResponseEnum = z.enum([
  'changes',
  'movie_credits',
  'tv_credits',
  'combined_credits',
  'external_ids',
  'images',
  'tagged_images',
  'translations',
]);

export const personDetailsQuerySchema = z.object({
  language: z.string().regex(new RegExp('([a-z]{2})-([A-Z]{2})')).optional(),
  append_to_response: z.array(personAppendToResponseEnum).optional(),
});

export const personDetailsPathParamsSchema = z.object({
  person_id: z.number({ required_error: 'person_id is required' }).min(0),
});


export type PersonDetailsPathParamsSchema = z.infer<typeof personDetailsPathParamsSchema>;
export type PersonDetailsQuerySchema = z.infer<typeof personDetailsQuerySchema>;
export type PersonAppendToResponseEnum = z.infer<typeof personAppendToResponseEnum>;
