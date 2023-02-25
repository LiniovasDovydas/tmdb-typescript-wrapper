import { z } from "zod";

export const timeZoneSchema = z.object({
  iso_3166_1: z.string(),
  zones: z.array(z.string()),
});

export type TimeZoneSchema = z.infer<typeof timeZoneSchema>;
