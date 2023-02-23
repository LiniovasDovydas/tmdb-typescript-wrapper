import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  minify: !options.watch,
  platform: "neutral",
  sourcemap: true,
  watch: !!options.watch,
  entry: ['src/index.ts'], 
  treeshake: true,
  outDir: 'lib',
  clean: true,
  dts: true,
}));
