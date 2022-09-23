import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://jblaszak.github.io",
  base: "/practice-blogr",
  integrations: [react()],
});
