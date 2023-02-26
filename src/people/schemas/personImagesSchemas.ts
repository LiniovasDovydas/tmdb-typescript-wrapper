import { z } from "zod";
import { personImageProfileSchema } from "./personImageProfileSchema";

export const personImagesPathParamsSchema = z.object({
  person_id: z.number({ required_error: "person_id is required" }).min(0),
});

export const personImagesResponseSchema = z.object({
  id: z.number().min(0).optional(),
  profiles: z.array(personImageProfileSchema).optional(),
});

export type PersonImagesPathParamsSchema = z.infer<
  typeof personImagesPathParamsSchema
>;
