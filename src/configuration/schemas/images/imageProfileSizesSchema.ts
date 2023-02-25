import { z } from "zod";

export const imageProfileSizeEnum = z.enum([
  "w45",
  "w185",
  "h632",
  "original",
]);

export const imageProfileSizesSchema = z.array(imageProfileSizeEnum);

export type ImageProfileSizeEnum = z.infer<typeof imageProfileSizeEnum>;
export type ImageProfileSizesSchema = z.infer<typeof imageProfileSizesSchema>;
