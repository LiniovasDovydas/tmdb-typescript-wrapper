import { z } from "zod";

export const imageStillSizeEnum = z.enum(["w92", "w185", "w300", "original"]);

export const imageStillSizesSchema = z.array(imageStillSizeEnum);

export type ImageStillSizeEnum = z.infer<typeof imageStillSizeEnum>;
export type ImageStillSizesSchema = z.infer<typeof imageStillSizesSchema>;
