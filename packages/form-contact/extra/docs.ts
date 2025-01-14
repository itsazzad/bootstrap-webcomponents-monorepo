import type { CssPart, CssVar, HtmlSlot, i18nLang, StyleSetup, ComponentSetup } from "@htmlbricks/hb-jsutils/main";
import type { Component } from "../app/types/webcomponent.type";

export const storybookArgs = {
	action: { control: { type: "text" } },
	method: { control: { type: "radio" }, options: ["POST", "GET"] },
	formkey: { control: { type: "text" } },
	subjectkey: { control: { type: "text" } },
	contentkey: { control: { type: "text" } },
	recaptchasitekey: { control: { type: "text" } },
	"sent-mail": { action: "sent-mail" },
	"sent-mail-error": { action: "sent-mail-error" },
};

const cssVars: CssVar[] = [];
export const cssParts: CssPart[] = [{ name: "container", description: "" }];
export const htmlSlots: HtmlSlot[] = [];
export const i18nLanguages: i18nLang[] = [];

export const styleSetup: StyleSetup = {
	vars: cssVars,
	parts: cssParts,
};

const examples: Component[] = [
	{
		action: "",
		method: "POST",
		"formkey": "",
		"subjectkey": "",
		"contentkey": "",
		"recaptchasitekey": "",
	},
];
export const componentSetup: ComponentSetup & { examples: Component[] } = {
	definitions: null,
	storybookArgs,
	styleSetup,
	author: null,
	contributors: [],
	owner: null,
	htmlSlots,
	i18n: i18nLanguages,
	examples,
	screenshots: [],
	licenses: [{ type: "Apache-2.0", path: "LICENSE.md", cost: 0, currency: "EUR" }],
	readmePath: "README.md",
	name: "hb-form-contact",
	category: "graph",
	tags: ["graph"],
	size: {},
	iifePath: "release/release.js",
	repoName: "@htmlbricks/hb-form-contact",
	version: null,
};
