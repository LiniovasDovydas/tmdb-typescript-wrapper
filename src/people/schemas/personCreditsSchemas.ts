import { z } from "zod";
import { castSchema } from "./castSchema";
import { crewSchema } from "./crewSchema";
import { languageSchemaQuery } from "../../schemas/languageSchema";

export const personCreditsPathParamsSchema = z.object({
  person_id: z.number({ required_error: "person_id is required" }).min(0),
});

export const personCreditsQuerySchema = z.object({
  language: languageSchemaQuery.optional(),
});

export const personCreditsResponseSchema = z.object({
  cast: z.array(castSchema).optional(),
  crew: z.array(crewSchema).optional(),
  id: z.number().min(0).optional(),
});

export type PersonCreditsPathParamsSchema = z.infer<
  typeof personCreditsPathParamsSchema
>;

export type PersonCreditsResponseSchema = z.infer<
  typeof personCreditsResponseSchema
>;

export type PersonCreditsQuerySchema = z.infer<
  typeof personCreditsQuerySchema
>;
