import type { CssPart, CssVar, HtmlSlot, i18nLang } from "@htmlbricks/hb-jsutils/main";

export const storybookArgs = {
	shipments: { control: { type: "array" } },
	user: { control: { type: "object" } },
	payment: { control: { type: "object" } },
	paymentCompleted: { action: "paymentCompleted" },
	saveUser: { action: "saveUser" },
	saveShipment: { action: "saveShipment" },
	gateways: { control: { type: "array" } },
	setGateway: { action: "setGateway" },
	completed: { control: { type: "radio" }, options: ["yes", "no"] },
};

export const cssVars: CssVar[] = [
	{
		name: "--edit-color",
		defaultValue: "green",
		description: "",
		valueType: "",
	},
];
export const cssParts: CssPart[] = [];
export const htmlSlots: HtmlSlot[] = [];
export const i18nLanguages: i18nLang[] = [];
