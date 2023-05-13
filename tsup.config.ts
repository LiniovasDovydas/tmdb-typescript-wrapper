import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "tmdb-api",
  format: ["cjs", "esm"],
  minify: !options.watch,
  platform: "node",
  sourcemap: true,
  watch: !!options.watch,
  entry: ["src/index.ts"],
  treeshake: true,
  outDir: "lib",
  clean: true,
  dts: {
    resolve: true,
    compilerOptions: {
      moduleResolution: "node",
    },
    entry: "src/index.ts",
  },
}));
