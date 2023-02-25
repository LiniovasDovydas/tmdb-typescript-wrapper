import { z } from "zod";

export const imageBackDropSizeEnum = z.enum([
  "w300",
  "w780",
  "w1280",
  "original"
]);

export const imageBackDropSizesSchema = z.array(imageBackDropSizeEnum);

export type ImageBackDropSizeEnum = z.infer<typeof imageBackDropSizeEnum>;
export type ImageBackDropSizesSchema = z.infer<typeof imageBackDropSizesSchema>;
