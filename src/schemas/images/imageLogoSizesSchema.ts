import { z } from "zod";

export const imageLogoSizeEnum = z.enum([
  "w45",
  "w92",
  "w154",
  "w185",
  "w300",
  "w500",
  "original",
]);

export const imageLogoSizesSchema = z.array(imageLogoSizeEnum);

export type ImageLogoSizeEnum = z.infer<typeof imageLogoSizeEnum>;
export type ImageLogoSizesSchema = z.infer<typeof imageLogoSizesSchema>;
