/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  clearScreen: true,
  appType: "custom",
  test: {
    globals: true,
    environment: "node",
    include: ["src/**/*.test.ts"],
    testTimeout: 10000,
  },
});
