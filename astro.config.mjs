import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

const siteUrl = process.env.PUBLIC_SITE_URL ?? "https://johannesmogashoa.co.za";

export default defineConfig({
  output: "server",
  site: siteUrl,
  adapter: cloudflare({
    imageService: "passthrough",
  }),
  integrations: [react(), sitemap()],
  image: {
    service: passthroughImageService(),
  },
  vite: {
    optimizeDeps: {
      exclude: ["react-icons"],
    },
    ssr: {
      optimizeDeps: {
        // Forces Vite to leave Astro's internal dynamic routers alone
        exclude: [
          "astro/runtime/server/index.js",
          "route-cache",
          "manifest",
          "errors-data",
        ],
      },
      // Ensures React handles strict edge-runtime modules natively
      noExternal: ["react-icons", "react", "react-dom"],
    },
  },
});
