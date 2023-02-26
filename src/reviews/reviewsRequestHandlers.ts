import { createRequestHandler, createRequestNamespace } from "../utils";
import { reviewsPathParamsSchema, reviewsSchema } from "./schemas/reviewSchemas";

export const reviewsRequestHandlers = createRequestNamespace((apiKey) => ({
  getReview: createRequestHandler(
    apiKey,
    'review/{review_id}',
    {
      pathSchema: reviewsPathParamsSchema,
      responseSchema: reviewsSchema,
    },
  ),
}));
