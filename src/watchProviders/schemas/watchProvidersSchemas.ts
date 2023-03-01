import { z } from "zod";
import { languageSchema } from "../../schemas/languageSchema";
import { watchProviderSharedSchema } from "./watchProviderSharedSchema";

export const watchProviderQuerySchema = z.object({
  watch_region: z.string(),
}).extend(languageSchema.shape);

export const watchProvidersResponseSchema = z.object({
  results: z.array(watchProviderSharedSchema),
});

export type WatchProviderQuerySchema = z.infer<typeof watchProviderQuerySchema>;
export type WatchProvidersResponseSchema = z.infer<typeof watchProvidersResponseSchema>;
