import { expect, test } from "@playwright/test";

test("homepage provides the primary navigation and contact journey", async ({ page, request }) => {
	await page.goto("/");

	await expect(page).toHaveTitle("Personal Site | Johannes Mogashoa");
	await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
	await expect(page.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
	await expect(page.getByRole("link", { name: "Articles" })).toHaveAttribute("href", "#articles");
	await expect(page.getByRole("link", { name: "Technologies" })).toHaveAttribute("href", "#tech");
	await expect(page.getByRole("link", { name: "jomogashoa1993@gmail.com" })).toHaveAttribute(
		"href",
		"mailto:jomogashoa1993@gmail.com",
	);

	const resumeResponse = await request.get("/Johannes-Mogashoa-Resume.pdf");
	expect(resumeResponse.ok()).toBe(true);
	expect(resumeResponse.headers()["content-type"]).toContain("application/pdf");
});

test("homepage remains within the viewport on responsive layouts", async ({ page }) => {
	await page.goto("/");

	const hasHorizontalOverflow = await page.evaluate(
		() => document.documentElement.scrollWidth > document.documentElement.clientWidth,
	);

	expect(hasHorizontalOverflow).toBe(false);
	await expect(page.getByRole("link", { name: "Get Resume" })).toBeVisible();
	await expect(page.getByRole("button", { name: /Show 2026-Present/ })).toBeVisible();
});
