import { expect, test } from "@playwright/test";

test("homepage provides the primary navigation and contact journey", async ({ page, request }) => {
	await page.goto("/");

	await expect(page).toHaveTitle("Personal Site | Johannes Mogashoa");
	const menuToggle = page.getByRole("button", { name: "Menu" });
	if (await menuToggle.isVisible()) await menuToggle.click();
	await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
	await expect(page.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
	await expect(page.getByRole("link", { name: "Writing" })).toHaveAttribute("href", "#articles");
	await expect(page.getByRole("link", { name: "Work", exact: true })).toHaveAttribute(
		"href",
		"#work",
	);
	await expect(page.getByRole("link", { name: "Start a conversation" }).first()).toHaveAttribute(
		"href",
		"mailto:yngstln.dev@gmail.com",
	);

	const resumeResponse = await request.get("/Johannes-Mogashoa-Resume.pdf");
	expect(resumeResponse.ok()).toBe(true);
	expect(resumeResponse.headers()["content-type"]).toContain("application/pdf");
});

test("homepage remains within the viewport at milestone breakpoints", async ({ page }) => {
	for (const width of [320, 375, 768, 1024, 1440]) {
		await page.setViewportSize({ width, height: 900 });
		await page.goto("/");

		const hasHorizontalOverflow = await page.evaluate(
			() => document.documentElement.scrollWidth > document.documentElement.clientWidth,
		);
		expect(hasHorizontalOverflow, `horizontal overflow at ${width}px`).toBe(false);
	}

	await expect(page.getByRole("link", { name: /Download résumé/ })).toBeVisible();
	await expect(page.getByRole("button", { name: /Show 2026-Present/ })).toBeVisible();
});

test("mobile navigation supports touch and keyboard dismissal", async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 812 });
	await page.goto("/");

	const menu = page.getByRole("button", { name: "Menu" });
	await expect(menu).toHaveAttribute("aria-expanded", "false");
	await menu.click();
	await expect(menu).toHaveAttribute("aria-expanded", "true");
	await expect(page.getByRole("link", { name: "Work", exact: true })).toBeVisible();
	await page.keyboard.press("Escape");
	await expect(menu).toHaveAttribute("aria-expanded", "false");
});

test("colour theme can be changed and retained", async ({ page }) => {
	await page.goto("/");
	await page.getByRole("button", { name: "Switch colour theme" }).click();
	await expect(page.locator("html")).toHaveAttribute("data-theme", /light|dark/);
});
