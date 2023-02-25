import { printZodErrorGroup } from "./utils";
import { instanceSchema, type InstanceSchema } from "./schemas";
import { createTMDbCRUDInstance } from './createTMDbCRUDInstance';

export function createTMDbInstance(options: InstanceSchema = { apiKey: '' }) {
  const optionsResult = instanceSchema.safeParse(options);

  /** Validate passed options */
  if (optionsResult.success === false) {
    printZodErrorGroup(optionsResult, 'TMDb instance options are invalid.');
    return;
  }

  return createTMDbCRUDInstance(options.apiKey);
}
