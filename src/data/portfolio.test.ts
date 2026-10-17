import { describe, expect, it } from "vitest";
import { timeline } from "./portfolio";

describe("career timeline", () => {
	it("contains unique, non-empty entries in chronological order", () => {
		expect(timeline).toHaveLength(6);
		expect(new Set(timeline.map(({ text }) => text)).size).toBe(timeline.length);
		expect(timeline.every(({ text, year }) => text.length > 0 && year.length > 0)).toBe(true);
		expect(timeline.at(-1)).toEqual({
			year: "2026-Present",
			text: "Software Engineer · Nintex",
		});
	});
});
