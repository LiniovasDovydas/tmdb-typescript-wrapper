import { z } from "zod";

export const jobSchema = z.object({
  department: z.string().optional(),
  jobs: z.array(z.string()).optional(),
});

export type JobSchema = z.infer<typeof jobSchema>;
