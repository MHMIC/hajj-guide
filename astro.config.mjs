// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://hajjfocus.com",
  integrations: [
    starlight({
      title: "Hajjfocus.com | Hajj Guide",
      description:
        "A comprehensive guide to performing Hajj, including rituals, duas, and practical tips.",
      customCss: [
        // Fontsource files for to regular and semi-bold font weights.
        "@fontsource/eb-garamond",
        "@fontsource/amiri-quran/400.css",
        "./src/styles/custom.css",
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/MHMIC/hajj-guide",
        },
      ],
      sidebar: [
        { label: "Home", link: "/" },
        {
          label: "Guide",
          items: [
            { slug: "guide/before-you-go" },
            { slug: "guide/mindset" },
            { slug: "guide/types-of-hajj" },
            { slug: "guide/umrah" },
            {
              label: "Acts of Worship",
              items: [
                { slug: "guide/acts-of-worship/ihram" },
                { slug: "guide/acts-of-worship/tawaf" },
                { slug: "guide/acts-of-worship/saee" },
                { slug: "guide/acts-of-worship/rami" },
                { slug: "guide/acts-of-worship/halq" },
                { slug: "guide/acts-of-worship/hadi" },
              ],
            },
            {
              label: "Step-by-Step Hajj",
              items: [
                { slug: "guide/day-1" },
                { slug: "guide/day-2" },
                { slug: "guide/day-3" },
                { slug: "guide/days-4-6" },
              ],
            },
            { slug: "guide/after" },
            { slug: "guide/visiting-madinah" },
          ],
        },
        {
          label: "Reference",
          items: [
            { slug: "reference/checklists" },
            { slug: "reference/daywise-checklists" },
            { slug: "reference/packing-checklists" },
            { slug: "reference/duas" },
            { slug: "reference/faqs" },
            { slug: "reference/glossary" },
          ],
        },
      ],
    }),
  ],
});
