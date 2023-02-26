export function createRequestNamespace<T>(cb: (apiKey: string) => T) {
  return (apiKey: string) => cb(apiKey);
}
