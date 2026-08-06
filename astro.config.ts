// @ts-check
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import type { Schema } from "hast-util-sanitize";

import { frenchSpacing } from "./src/plugins/french-spacing";
import { customFigcaption } from "./src/plugins/custom-figcaption";

const schema: Schema = {
  ...defaultSchema,
  clobberPrefix: "",
  tagNames: [...(defaultSchema.tagNames ?? []), "figure", "figcaption"],
  attributes: {
    ...(defaultSchema.attributes ?? {}),
    "*": [...(defaultSchema.attributes?.["*"] ?? []), "className", "style"],
    img: [...(defaultSchema.attributes?.img ?? []), "src", "alt", "title"],
  },
};

// https://astro.build/config
export default defineConfig({
  site: "https://yvonnetoros.com",
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath, frenchSpacing, customFigcaption],
      rehypePlugins: [rehypeKatex, rehypeRaw, [rehypeSanitize, schema]],
    }),
  },
});
