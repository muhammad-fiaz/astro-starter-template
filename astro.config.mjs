// @ts-check
import { defineConfig } from "astro/config";

import markdoc from "@astrojs/markdoc";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Replace with your production domain so canonical URLs and the sitemap are absolute.
  site: "https://localhost:3000",
  base: "/",

  integrations: [markdoc(), partytown(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
