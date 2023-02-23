import { z } from "zod";

import {
  imageBackDropSizesSchema,
  imageProfileSizesSchema,
  imagePosterSizesSchema,
  imageStillSizesSchema,
  imageLogoSizesSchema,
} from "../../schemas/images";

export const imageConfigurationSchema = z.object({
  base_url: z.string().url('TMDb returned an invalid image base URL'),
  secure_base_url: z.string().url('TMDb returned an invalid image secure base URL'),
  backdrop_sizes: imageBackDropSizesSchema.min(1, 'TMDb returned an invalid image backdrop sizes array'),
  logo_sizes: imageLogoSizesSchema.min(1, 'TMDb returned an invalid image logo sizes array'),
  poster_sizes: imagePosterSizesSchema.min(1, 'TMDb returned an invalid image poster sizes array'),
  profile_sizes: imageProfileSizesSchema.min(1, 'TMDb returned an invalid image profile sizes array'),
  still_sizes: imageStillSizesSchema.min(1, 'TMDb returned an invalid image still sizes array'),
});

export type ImageConfigurationSchema = z.infer<typeof imageConfigurationSchema>;
