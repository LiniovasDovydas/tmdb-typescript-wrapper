import { z } from "zod";
import { imageConfigurationSchema } from "./imageConfigurationSchema";

export const configurationSchema = z.object({
  images: imageConfigurationSchema,
  change_keys: z.array(z.string()).optional(),
});

export type ConfigurationSchema = z.infer<typeof configurationSchema>;
