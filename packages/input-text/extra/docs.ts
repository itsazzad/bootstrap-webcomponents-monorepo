import type { CssPart, CssVar, HtmlSlot, i18nLang, StyleSetup, ComponentSetup } from "@htmlbricks/hb-jsutils/main";
import type { Component } from "../app/types/webcomponent.type";

export const storybookArgs = {
	schemaentry: { control: { type: "object" } },
	showvalidation: { control: { type: "boolean" } },
	setvalid: { control: { type: "boolean" } },
	setvalue: { control: { type: "boolean" } },
	setValid: { action: "setValid" },
	setValue: { action: "setValue" },
};

const cssVars: CssVar[] = [
	{ name: "--bs-primary", valueType: "color", theme: "bootstrap", defaultValue: "#07689f" },
	{ name: "--bs-secondary", valueType: "color", theme: "bootstrap", defaultValue: "#c9d6df" },
	{ name: "--bs-success", valueType: "color", theme: "bootstrap", defaultValue: "#11d3bc" },
	{ name: "--bs-info", valueType: "color", theme: "bootstrap", defaultValue: "#a2d5f2" },
	{ name: "--bs-warning", valueType: "color", theme: "bootstrap", defaultValue: "#ffc107" },
	{ name: "--bs-danger", valueType: "color", theme: "bootstrap", defaultValue: "#f67280" },
];
export const cssParts: CssPart[] = [{ name: "invalid-feedback", description: "" }];
export const htmlSlots: HtmlSlot[] = [];
export const i18nLanguages: i18nLang[] = [];

export const styleSetup: StyleSetup = {
	vars: cssVars,
	parts: cssParts,
};

const examples: Component[] = [
	{
		schemaentry: {
			placeholder: "Insert your last name here...",
			id: "lastName",
			required: true,
			validationTip: "This field cannot be empty.",
		},
	},
];
export const componentSetup: ComponentSetup & { examples: Component[] } = {
	definitions: null,
	storybookArgs,
	styleSetup,
	htmlSlots,
	i18n: i18nLanguages,
	examples,
	screenshots: [],
	license: "Apache-2.0",
	name: "hb-input-text",
	category: "input",
	tags: ["input"],
	size: {},
	iifePath: "release/release.js",
	repoName: "@htmlbricks/hb-input-text",
	version: null,
};
