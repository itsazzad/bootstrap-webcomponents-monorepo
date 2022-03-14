import type { CssPart, CssVar, HtmlSlot, i18nLang } from "@htmlbricks/hb-jsutils/main";

export const storybookArgs = {
	videosrc: { control: { type: "text" } },
	title: { control: { type: "text" } },
	provider: { control: { type: "text" } },
	description: { control: { type: "text" } },
	time: { control: { type: "date" } },
	pageuri: { control: { type: "text" } },
	linklabel: { control: { type: "text" } },
	dateformat: { control: { type: "text" } },
};

export const cssVars: CssVar[] = [];
export const cssParts: CssPart[] = [];
export const htmlSlots: HtmlSlot[] = [];
export const i18nLanguages: i18nLang[] = [];
