import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import Header from "./Header.astro";

describe("Header", () => {
	it("renders accessible navigation controls and verified social links", async () => {
		const container = await AstroContainer.create();
		const html = await container.renderToString(Header);

		expect(html).toContain('href="#about"');
		expect(html).toContain('href="#work"');
		expect(html).toContain('href="#articles"');
		expect(html).toContain('href="#contact"');
		expect(html).toContain('aria-controls="primary-navigation"');
		expect(html).toContain("https://www.github.com/JohannesMogashoa");
		expect(html).toContain("https://www.linkedin.com/in/johannes-mogashoa-358416190");
		expect(html).not.toContain("twitter.com");
	});
});
