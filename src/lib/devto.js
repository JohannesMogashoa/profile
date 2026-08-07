const DEV_TO_URL =
	"https://dev.to/api/articles?username=johannesmogashoa&per_page=12";

const isHttpUrl = (value) => {
	if (typeof value !== "string" || !value) return false;

	try {
		const url = new URL(value);
		return url.protocol === "https:" || url.protocol === "http:";
	} catch {
		return false;
	}
};

const asText = (value, fallback = "") =>
	typeof value === "string" ? value.trim() : fallback;

const normalizeArticle = (article) => {
	if (!article || typeof article !== "object") return null;

	const title = asText(article.title);
	const url = asText(article.url);

	if (!article.id || !title || !isHttpUrl(url)) return null;

	const image = [article.cover_image, article.social_image].find(isHttpUrl);
	const tags = Array.isArray(article.tag_list)
		? article.tag_list.filter((tag) => typeof tag === "string").slice(0, 8)
		: [];

	return {
		id: String(article.id),
		title,
		description: asText(article.description, "Read the latest article on DEV.to."),
		url,
		image,
		tags,
	};
};

export const getArticles = async () => {
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 5000);

	try {
		const response = await fetch(DEV_TO_URL, {
			headers: {
				Accept: "application/json",
				"User-Agent": "Johannes-Mogashoa-Portfolio/1.0",
			},
			cache: "no-store",
			signal: controller.signal,
		});

		if (!response.ok) return [];

		const payload = await response.json();
		return Array.isArray(payload)
			? payload.map(normalizeArticle).filter(Boolean)
			: [];
	} catch {
		return [];
	} finally {
		clearTimeout(timeout);
	}
};
