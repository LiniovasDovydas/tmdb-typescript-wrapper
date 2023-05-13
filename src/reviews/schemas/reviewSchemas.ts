import { z } from "zod";

export const reviewAuthorSchema = z.object({
  name: z.string().optional(),
  username: z.string().optional(),
  avatar_path: z.string().optional(),
  rating: z.number().min(0).optional(),
});

export const reviewsSchema = z.object({
  id: z.string().optional(),
  author: z.string().optional(),
  content: z.string().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  url: z.string().optional(),
  media_id: z.number().min(0).optional(),
  media_title: z.string().optional(),
  media_type: z.string().optional(),
  iso_639_1: z.string().optional(),
  author_details: reviewAuthorSchema.optional(),
});

export const reviewsPathParamsSchema = z.object({
  review_id: z.string(),
});

export type Review = z.infer<typeof reviewsSchema>;
export type ReviewAuthor = z.infer<typeof reviewAuthorSchema>;
export type ReviewsPathParams = z.infer<typeof reviewsPathParamsSchema>;
