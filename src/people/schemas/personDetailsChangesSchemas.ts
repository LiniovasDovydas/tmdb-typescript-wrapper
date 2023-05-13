import { z } from "zod";

export const personDetailsChangesQuerySchema = z.object({
  start_date: z
    .string()
    .regex(new RegExp("([0-9]{4})-([0-9]{2})-([0-9]{2})"))
    .optional(),
  end_date: z
    .string()
    .regex(new RegExp("([0-9]{4})-([0-9]{2})-([0-9]{2})"))
    .optional(),
  page: z.number().min(1).optional(),
});

export const personDetailsChangesPathParamsSchema = z.object({
  person_id: z.number({ required_error: "person_id is required" }).min(0),
});

export const personDetailsChangesResponseSchema = z.object({
  changes: z.array(
    z.object({
      key: z.string(),
      items: z.array(
        z.object({
          id: z.string(),
          action: z.string(),
          time: z.string(),
          original_value: z
            .object({
              profile: z
                .object({
                  file_path: z.string(),
                })
                .optional(),
            })
            .optional(),
        })
      ),
    })
  ),
});

export type PersonDetailsChangesPathParamsSchema = z.infer<
  typeof personDetailsChangesPathParamsSchema
>;
export type PersonDetailsChangesResponseSchema = z.infer<
  typeof personDetailsChangesResponseSchema
>;
export type PersonDetailsChangesQuerySchema = z.infer<
  typeof personDetailsChangesQuerySchema
>;
