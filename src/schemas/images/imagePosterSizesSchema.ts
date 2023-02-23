import { z } from "zod";

export const imagePosterSizeEnum = z.enum([  
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original",
]);

export const imagePosterSizesSchema = z.array(imagePosterSizeEnum);

export type ImagePosterSizeEnum = z.infer<typeof imagePosterSizeEnum>;
export type ImagePosterSizesSchema = z.infer<typeof imagePosterSizesSchema>;
