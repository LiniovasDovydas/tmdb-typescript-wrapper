import { z } from "zod";
import { languageSchema } from "../../schemas/languageSchema";

export const watchProviderSchema = z.object({
  english_name: z.string(),
  native_name: z.string(),
  iso_3166_1: z.string(),
});

export const watchProvidersAvailableQuerySchema = z
  .object({})
  .extend(languageSchema.shape);

export const watchProvidersAvailableResponseSchema = z.object({
  results: z.array(watchProviderSchema),
});

export type WatchProviderSchema = z.infer<typeof watchProviderSchema>;
export type WatchProvidersAvailableQuerySchema = z.infer<
  typeof watchProvidersAvailableQuerySchema
>;
export type WatchProvidersAvailableResponseSchema = z.infer<
  typeof watchProvidersAvailableResponseSchema
>;
