import { z } from "zod";
import { castSchema } from "./castSchema";
import { crewSchema } from "./crewSchema";
import { languageSchema } from "../../schemas/languageSchema";

export const personCombinedCreditsPathParamsSchema = z.object({
  person_id: z.number({ required_error: "person_id is required" }).min(0),
});

export const personCombinedCreditsQuerySchema = z.object({
  language: languageSchema.optional(),
});

export const personCombinedCreditsResponseSchema = z.object({
  cast: z.array(castSchema).optional(),
  crew: z.array(crewSchema).optional(),
  id: z.number().min(0).optional(),
});

export type PersonCombinedCreditsPathParamsSchema = z.infer<
  typeof personCombinedCreditsPathParamsSchema
>;

export type PersonCombinedCreditsResponseSchema = z.infer<
  typeof personCombinedCreditsResponseSchema
>;

export type PersonCombinedCreditsQuerySchema = z.infer<
  typeof personCombinedCreditsQuerySchema
>;
