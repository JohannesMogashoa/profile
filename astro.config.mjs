import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";

const siteUrl = process.env.PUBLIC_SITE_URL ?? "https://johannesmogashoa.co.za";

export default defineConfig({
	output: "static",
	site: siteUrl,
	integrations: [sitemap()],
	image: {
		service: passthroughImageService(),
	},
});
