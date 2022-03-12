import type { CssPart, CssVar, HtmlSlot } from "../../jsutils/main";

export const storybookArgs = {
	page: { control: { type: "number" } },
	pages: { control: { type: "number" } },
	pagechange: { action: "pagechange" },
};
