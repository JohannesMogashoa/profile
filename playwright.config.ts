import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	fullyParallel: true,
	forbidOnly: Boolean(process.env.CI),
	reporter: process.env.CI ? "github" : "list",
	retries: process.env.CI ? 2 : 0,
	testDir: "./tests/e2e",
	use: {
		baseURL: "http://127.0.0.1:4322",
		trace: "on-first-retry",
	},
	webServer: {
		command: "pnpm build && python3 -m http.server 4322 --bind 127.0.0.1 --directory dist",
		reuseExistingServer: !process.env.CI,
		timeout: 120_000,
		url: "http://127.0.0.1:4322",
	},
	projects: [
		{
			name: "desktop-chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "mobile-chromium",
			use: { ...devices["Pixel 5"] },
		},
	],
});
