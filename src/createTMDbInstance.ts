import { printZodErrorGroup } from "./utils";
import { peopleRequestHandlers } from "./people";
import { InstanceSchema, instanceSchema } from "./schemas";
import { configurationRequestHandlers } from "./configuration";

export function createTMDbInstance(options: InstanceSchema = { apiKey: '' }) {
  const optionsResult = instanceSchema.safeParse(options);

  /** Validate passed options */
  if (optionsResult.success === false) {
    printZodErrorGroup(optionsResult, 'TMDb instance options are invalid.');
    return;
  }

  const { apiKey } = optionsResult.data;

  return {
    ...configurationRequestHandlers(apiKey),
    ...peopleRequestHandlers(apiKey),
  };
}
