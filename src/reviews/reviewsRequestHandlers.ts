import { createRequestHandler } from "../utils";
import { reviewsPathParamsSchema, reviewsSchema } from "./schemas/reviewSchemas";

export function reviewsRequestHandlers(apiKey: string) {
  return {
    getReview: createRequestHandler(
      apiKey,
      'review/{review_id}',
      {
        pathSchema: reviewsPathParamsSchema,
        responseSchema: reviewsSchema,
      },
    ),
  };
}
