import { createRequestHandler, createRequestNamespace } from "../utils";

import {
  personDetailsPathParamsSchema,
  personDetailsResponseSchema,
  personDetailsQuerySchema,
} from "./schemas/personDetailsSchemas";

import {
  personCreditsPathParamsSchema,
  personCreditsResponseSchema,
  personCreditsQuerySchema,
} from "./schemas/personCreditsSchemas";

import {
  personDetailsChangesPathParamsSchema,
  personDetailsChangesResponseSchema,
  personDetailsChangesQuerySchema,
} from "./schemas/personDetailsChangesSchemas";

import {
  personExternalIdsPathParamsSchema,
  personExternalIdsResponseSchema,
  personExternalIdsQuerySchema,
} from "./schemas/personExternalIdsSchemas";

import {
  personImagesPathParamsSchema,
  personImagesResponseSchema,
} from "./schemas/personImagesSchemas";

import {
  personTaggedImagesPathParamsSchema,
  personTaggedImagesResponseSchema,
  personTaggedImagesQuerySchema,
} from "./schemas/personTaggedImagesSchemas";

import {
  personTranslationsPathParamsSchema,
  personTranslationsResponseSchema,
  personTranslationsQuerySchema,
} from "./schemas/personTranslationsSchemas";

import {
  personLatestQuerySchema,
  personLatestResponseSchema,
} from "./schemas/personLatestSchemas";

import {
  personPopularResponseSchema,
  personPopularQuerySchema,
} from "./schemas/personPopularSchemas";

export const peopleRequestHandlers = createRequestNamespace((apiKey) => ({
  getPersonDetails: createRequestHandler(apiKey, "person/{person_id}", {
    responseSchema: personDetailsResponseSchema,
    pathSchema: personDetailsPathParamsSchema,
    querySchema: personDetailsQuerySchema,
  }),
  getPersonDetailsChanges: createRequestHandler(
    apiKey,
    "person/{person_id}/changes",
    {
      responseSchema: personDetailsChangesResponseSchema,
      pathSchema: personDetailsChangesPathParamsSchema,
      querySchema: personDetailsChangesQuerySchema,
    }
  ),
  getPersonMovieCredits: createRequestHandler(
    apiKey,
    "person/{person_id}/movie_credits",
    {
      responseSchema: personCreditsResponseSchema,
      pathSchema: personCreditsPathParamsSchema,
      querySchema: personCreditsQuerySchema,
    }
  ),
  getPersonTvCredits: createRequestHandler(
    apiKey,
    "person/{person_id}/tv_credits",
    {
      responseSchema: personCreditsResponseSchema,
      pathSchema: personCreditsPathParamsSchema,
      querySchema: personCreditsQuerySchema,
    }
  ),
  getCombinedCredits: createRequestHandler(
    apiKey,
    "person/{person_id}/combined_credits",
    {
      responseSchema: personCreditsResponseSchema,
      pathSchema: personCreditsPathParamsSchema,
      querySchema: personCreditsQuerySchema,
    }
  ),
  getPersonExternalIds: createRequestHandler(
    apiKey,
    "person/{person_id}/external_ids",
    {
      responseSchema: personExternalIdsResponseSchema,
      pathSchema: personExternalIdsPathParamsSchema,
      querySchema: personExternalIdsQuerySchema,
    }
  ),
  getPersonImages: createRequestHandler(apiKey, "person/{person_id}/images", {
    responseSchema: personImagesResponseSchema,
    pathSchema: personImagesPathParamsSchema,
  }),
  getPersonTaggedImages: createRequestHandler(
    apiKey,
    "person/{person_id}/tagged_images",
    {
      responseSchema: personTaggedImagesResponseSchema,
      pathSchema: personTaggedImagesPathParamsSchema,
      querySchema: personTaggedImagesQuerySchema,
    }
  ),
  getPersonTranslations: createRequestHandler(
    apiKey,
    "person/{person_id}/translations",
    {
      responseSchema: personTranslationsResponseSchema,
      pathSchema: personTranslationsPathParamsSchema,
      querySchema: personTranslationsQuerySchema,
    }
  ),
  getPersonLatest: createRequestHandler(apiKey, "person/latest", {
    responseSchema: personLatestResponseSchema,
    querySchema: personLatestQuerySchema,
  }),
  getPersonPopular: createRequestHandler(apiKey, "person/popular", {
    responseSchema: personPopularResponseSchema,
    querySchema: personPopularQuerySchema,
  }),
}));
