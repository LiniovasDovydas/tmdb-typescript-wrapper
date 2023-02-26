import { z } from "zod";
import { createRequestHandler } from "../utils";
import { jobSchema } from "./schemas/jobSchema";
import { countrySchema } from "./schemas/countrySchema";
import { timeZoneSchema } from "./schemas/timeZoneSchema";
import { languagesSchema } from "./schemas/languagesSchema";
import { configurationSchema } from "./schemas/configurationSchema";

export function configurationRequestHandlers(apiKey: string) {
  return {
    getConfiguration: createRequestHandler(
      apiKey,
      'configuration',
      { responseSchema: configurationSchema }
    ),
    getCountries: createRequestHandler(
      apiKey,
      'configuration/countries',
      { responseSchema: z.array(countrySchema) }
    ),
    getJobs: createRequestHandler(
      apiKey,
      'configuration/jobs',
      { responseSchema: z.array(jobSchema) }
    ),
    getLanguages: createRequestHandler(
      apiKey,
      'configuration/languages',
      { responseSchema: z.array(languagesSchema) }
    ),
    getPrimaryTranslations: createRequestHandler(
      apiKey,
      'configuration/primary_translations',
      { responseSchema: z.array(z.string()) }
    ),
    getTimezones: createRequestHandler(
      apiKey,
      'configuration/timezones',
      { responseSchema: z.array(timeZoneSchema) }
    ),
  };
}
