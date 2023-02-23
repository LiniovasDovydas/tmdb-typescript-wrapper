import { z } from "zod";
import { imageConfigurationSchema } from "./imageConfigurationSchema";

export const configurationSchema = z.object({
  images: imageConfigurationSchema,
  change_keys: z.array(z.string()),
});

export type ConfigurationSchema = z.infer<typeof configurationSchema>;
