import { Story, Meta } from "@storybook/html";
import {
  webComponentBind,
  argTypesExtraUtils,
} from "./utils/webComponentUtils";
import { storybookArgs } from "../../packages/layout/extra/docs";

const copy1 = Object.assign({}, argTypesExtraUtils);
const copy2 = Object.assign({}, storybookArgs);

const assigned = Object.assign({}, copy1, copy2);

const meta: Meta = {
  title: "Layout/MainLayout",
  argTypes: assigned,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
const company1 = {
  logoUri:
    "https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg",
  siteName: "testsite",
  companyName: "testcompany S.R.L.",
  registration: "copyright",
  description: `testo e descrizione di esempio dell'applicazione`,
  vatNumber: "aa - ffffff",
  fiscalCode: "f4f5f6fff",
};

const navlinks2 = [
  {
    label: "Home",
    key: "home",
    icon: "house-door",
    badge: {
      text: "bbb",
    },
  },
  {
    label: "Dashboard",
    key: "dashboard",
    icon: "speedometer",
    badge: {
      text: "bbb",
    },
  },
  {
    label: "Settings",
    key: "settings",
    icon: "gear",
    group: "admin",
    badge: {
      text: "bbb",
    },
  },
  {
    label: "Users",
    key: "users",
    icon: "people-fill",
    group: "admin",
    badge: {
      text: "uuuuu",
    },
  },
  {
    label: "Stats",
    key: "stats",
    icon: "graph-up",
    group: "stats",
    badge: {
      text: "bbb",
    },
  },
];

const contacts1 = {
  sites: [
    {
      label: "dariocaruso.info",
      uri: "https://dariocaruso.info",
    },
  ],
  phones: [
    {
      number: "6666666666666",
    },
  ],
  addresses: [],
  emails: [],
};
const usermenu1 = {
  list: [
    {
      key: "list1",
      label: "list1",
    },
    {
      key: "list2",
      label: "list2",
    },
    {
      key: "list3",
      label: "list3",
      group: "list1",
      badge: "3",
    },
    {
      key: "list4",
      label: "list4",
      badge: "555",
    },
  ],
  imgUri:
    "https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg",
};
const socials1 = {
  facebook: "fbbb",
  youtube: "yttttttt",
};
const Template: Story = (args) =>
  webComponentBind(args, meta.argTypes, "layout");

export const LayoutA = Template.bind({});
LayoutA.args = {
  id: "LayoutA",
  company: company1,
  contacts: contacts1,
  socials: socials1,
  navlinks: navlinks2,
  usermenu: usermenu1,
};
export const LayoutAWithPage = Template.bind({});
LayoutAWithPage.args = {
  id: "LayoutAWithPage",
  company: company1,
  contacts: contacts1,
  socials: socials1,
  navlinks: navlinks2,
  pagename: "settings",
  usermenu: usermenu1,
  cookielaw: "yes",
  _testInnerHtml:
    '<div slot="page">paddddddddddddddddddddddddddddddddddddddddddge</div>',
};
export const LayoutAWithoutBurger = Template.bind({});
LayoutAWithoutBurger.args = {
  id: "LayoutAWithoutBurger",
  company: company1,
  contacts: contacts1,
  socials: socials1,
  pagename: "settings",
  usermenu: usermenu1,
  cookielaw: "yes",
};
export const LayoutAWithoutNavSlotted = Template.bind({});
LayoutAWithoutNavSlotted.args = {
  id: "LayoutAWithoutNavSlotted",
  company: company1,
  contacts: contacts1,
  socials: socials1,
  pagename: "settings",
  usermenu: usermenu1,
  cookielaw: "yes",
  _testInnerHtml: '<div slot="nav-right-slot">right-</div>',
};
