import { z } from "zod";

export const searchQuery = z.string().min(1).max(255);
export const searchQuerySchema = z.object({ query: searchQuery });

export type SearchQuery = z.infer<typeof searchQuery>;
export type SearchQuerySchema = z.infer<typeof searchQuerySchema>;
