<svelte:options tag="hb-page-loginregister" />

<script lang="ts">
	/**
	 * Svelte Video Gallery WebComponent
	 * =====================
	 *
	 * @contributors: Dario Caruso <dev@dariocaruso.info> (https://dariocaruso.info)
	 *
	 * @license: MIT License
	 *
	 */

	import { get_current_component } from "svelte/internal";
	import { createEventDispatcher } from "svelte";
	import pkg from "../../package.json";

	import type { IContacts, ISocials, ICompany, IColumn } from "../../../footer/app/types/webcomponent.type";
	import type { IUserMenu } from "../../../navbar/app/types/webcomponent.type";
	import type { INavLink } from "../../../sidenav-link/app/types/webcomponent.type";
	import type { IPage } from "@app/types/webcomponent.type";
	import { addComponent, getChildStyleToPass } from "@htmlbricks/hb-jsutils/main";
	import parseStyle from "style-to-object";
	let parsedStyle: { [x: string]: string };
	export let style: string;

	import { styleSetup as layoutStyleSetup } from "../../node_modules/@htmlbricks/hb-layout/release/docs";
	import { styleSetup as authStyleSetup } from "../../node_modules/@htmlbricks/hb-auth/release/docs";
	let layoutStyleToSet: string = "";
	let authStyleToSet: string = "";

	export let id: string;

	export let socials: ISocials;
	export let contacts: IContacts;

	export let company: ICompany;
	export let page: IPage;
	export let usermenu: IUserMenu;
	export let cookielaw: string;
	export let type: "login" | "register";
	export let columns: IColumn[];

	export let language: string;

	export let sessionkey: string;

	export let redirectonlogin: string;
	export let redirectoncreate: string;
	export let loginuri: string;
	export let registeruri: string;
	export let requestmethod: string;
	export let appendqueryparams: string;
	export let appendbodyparams: string;
	export let logouri: string;
	export let oauth2providers: string;

	export let passwordpattern: string;
	export let userpattern: string;
	export let usertype: "email" | "username";
	export let disableregister: boolean = null;

	$: {
		if (!id) id = "";
		if (style) {
			parsedStyle = parseStyle(style);
			layoutStyleToSet = getChildStyleToPass(parsedStyle, layoutStyleSetup?.vars);
			authStyleToSet = getChildStyleToPass(parsedStyle, authStyleSetup?.vars);
		}
		if (!oauth2providers) {
			oauth2providers = null;
		}
		if (!passwordpattern) {
			passwordpattern = null;
		}
		if (!userpattern) {
			userpattern = null;
		}
		if (!usertype) {
			usertype = "email";
		}
		if (!redirectonlogin) {
			redirectonlogin = null;
		}
		if (!redirectoncreate) {
			redirectoncreate = null;
		}
		if (!type) {
			type = "login";
		}

		if (!sessionkey) {
			sessionkey = "_lg";
		}
		if (!language) {
			language = "";
		}
		if (!appendqueryparams) {
			appendqueryparams = "";
		}
		if (!appendbodyparams) {
			appendbodyparams = "";
		}
		if (!loginuri) {
			loginuri = "";
		}
		if (!registeruri) {
			registeruri = "";
		}

		if (appendqueryparams) {
			appendqueryparams = "";
		}
		if (!logouri) {
			logouri = "";
		}
		if (!requestmethod) {
			requestmethod = "POST";
		}

		if (!page) {
			page = {
				href: location.href,
				pageName: "login",
			};
		}
		if (!cookielaw) {
			cookielaw = null;
		}
		if (!usermenu) {
			usermenu = null;
		}

		if (!company) {
			company = null;
		}

		if (!socials) {
			socials = null;
		}
		if (!contacts) {
			contacts = null;
		}
		if (!columns) {
			columns = null;
		}
	}
	const component = get_current_component();
	const svelteDispatch = createEventDispatcher();
	function dispatch(name, detail) {
		svelteDispatch(name, detail);
		component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, { detail }));
	}

	addComponent({ repoName: "@htmlbricks/hb-layout", version: pkg.version });
	addComponent({ repoName: "@htmlbricks/hb-auth", version: pkg.version });
</script>

<hb-layout
	onescreen="yes"
	socials={socials || ""}
	columns={columns || ""}
	contacts={contacts || ""}
	company={company || ""}
	style="display:block;{layoutStyleToSet}"
>
	<span slot="nav-right-slot"><slot name="nav-right-slot" /></span>
	<span slot="nav-left-slot"><slot name="nav-left-slot" /></span>
	<span slot="nav-center-slot"><slot name="nav-center-slot" /></span>

	<hb-auth
		style={authStyleToSet}
		sessionkey={sessionkey || ""}
		loginuri={loginuri || ""}
		part="loginbox"
		disableregister={disableregister || "no"}
		on:login={(l) => {
			dispatch("login", l.detail);
		}}
		on:register={(l) => {
			dispatch("register", l.detail);
		}}
		on:recoverOrActivate={(l) => {
			dispatch("recoverOrActivate", l.detail);
		}}
		slot="page"
	/>
</hb-layout>

<style lang="scss">
	hb-layout::part(footer) {
		background-color: rgba(0, 0, 0, 0.03);
		margin-top: 70px;
	}
	// @import "../styles/bootstrap.scss";
	@import "../styles/webcomponent.scss";
</style>
