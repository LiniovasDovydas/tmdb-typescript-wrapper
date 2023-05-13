import { printZodErrorGroup } from "./utils";
import { InstanceSchema, instanceSchema } from "./schemas";

import { peopleRequestHandlers } from "./people";
import { reviewsRequestHandlers } from "./reviews";
import { configurationRequestHandlers } from "./configuration";
import { watchProvidersRequestHandlers } from "./watchProviders";

export function createTMDbInstance(options: InstanceSchema = { apiKey: "" }) {
  const optionsResult = instanceSchema.safeParse(options);

  /** Validate passed options */
  if (optionsResult.success === false) {
    printZodErrorGroup(optionsResult, "TMDb instance options are invalid.");
    return;
  }

  const { apiKey } = optionsResult.data;

  return {
    config: configurationRequestHandlers(apiKey),
    people: peopleRequestHandlers(apiKey),
    reviews: reviewsRequestHandlers(apiKey),
    watchProviders: watchProvidersRequestHandlers(apiKey),
  };
}
