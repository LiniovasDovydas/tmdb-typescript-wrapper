import { printZodErrorGroup } from "./utils";
import { instanceSchema, type InstanceSchema } from "./schemas";

export async function createTMDbInstance(options: InstanceSchema = { apiKey: '' }) {
  const optionsResult = instanceSchema.safeParse(options);

  /** Validate passed options */
  if (optionsResult.success === false) {
    printZodErrorGroup(optionsResult, 'TMDb instance options are invalid.');
    return;
  }

  /** @TODO Load configuration from TMDb and return methods (lazy loaded maybe ?) */
  /** @TODO create a wrapper function which wraps a method and requires API key to be passed down */
  console.log('Init tmdb');
}
