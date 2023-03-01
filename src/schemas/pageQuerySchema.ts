import { z } from "zod";

export const pageQuery = z.number().min(1).max(1000);
export const pageQuerySchema = z.object({ page: pageQuery });

export type PageQuery = z.infer<typeof pageQuery>;
export type PageQuerySchema = z.infer<typeof pageQuerySchema>;
