// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import markdoc from "@astrojs/markdoc";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), partytown(), sitemap(), mdx(),icon()],

  vite: {
    plugins: [tailwindcss()],
  },
});