import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
	{
		ignores: [
			".astro/**",
			"coverage/**",
			"dist/**",
			"node_modules/**",
			"playwright-report/**",
			"test-results/**",
		],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...astro.configs.recommended,
	{
		files: ["**/*.{js,mjs,ts}"],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ["src/env.d.ts"],
		rules: {
			"@typescript-eslint/triple-slash-reference": "off",
		},
	},
];
