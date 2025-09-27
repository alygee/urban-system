/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./app/test/setup.ts"],
    css: true,
    globals: true,
    include: [
      "app/**/*.{test,spec}.{ts,tsx}",
      "routes/**/*.{test,spec}.{ts,tsx}",
      "tests/**/*.{test,spec}.{ts,tsx}",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      reportsDirectory: "./coverage",
      include: ["app/**/*.{ts,tsx}", "routes/**/*.{ts,tsx}"],
    },
    alias: {
      "@app": path.resolve(__dirname, "app"),
    },
  },
});
