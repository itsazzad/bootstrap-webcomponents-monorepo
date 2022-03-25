import type { FormSchema } from "../../../form/app/types/webcomponent.type";

export type Component = {
	id?: string;
	style?: string;
	steps?: number;
	schemes: FormSchema[];
	step?: number;
	submitstep?: "yes" | "no";
};

export type Events = {
	update: { step; scheme: { schema: FormSchema; valid: boolean }; valid: boolean };
	submit: { schemes; steps; step };
};
