import { type SafeParseError } from "zod";

export function printZodErrorGroup<T = any>(
  errors: SafeParseError<T>,
  group: string = "Error group"
) {
  console.group(`⚠️ ${group}`);
  errors.error.errors.flatMap((error) => {
    console.warn(error.message);
  });
  console.groupEnd();
}
