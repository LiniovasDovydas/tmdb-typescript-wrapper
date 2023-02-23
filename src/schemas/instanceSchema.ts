import { z } from "zod";

export const instanceSchema = z.object({
  apiKey: z.string().min(1, 'API key is required'),
});

export type InstanceSchema = z.infer<typeof instanceSchema>;
