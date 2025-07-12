// @ts-check
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import { pigment } from "@pigment-css/vite-plugin";

import theme from "./src/theme.js";

/**
 * @type {import('@pigment-css/vite-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ["@mui/material"],
  theme,
};

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [pigment(pigmentConfig)],
  },
});
