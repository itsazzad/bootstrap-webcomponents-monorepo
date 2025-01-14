import { Story, Meta } from "@storybook/html";
import {
  webComponentBind,
  argTypesExtraUtils,
} from "./utils/webComponentUtils";
import { storybookArgs } from "../../packages/offcanvas/extra/docs";

const copy1 = Object.assign({}, argTypesExtraUtils);
const copy2 = Object.assign({}, storybookArgs);

const assigned = Object.assign({}, copy1, copy2);
const meta: Meta = {
  title: "Layout/Offcanvas",
  argTypes: assigned,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const innerHTML = `<button slot="test" onclick="document.getElementsByTagName('hb-offcanvas')[0].setAttribute('opened', 'yes')">test</button>`;

const Template: Story = (args: any) =>
  webComponentBind(args, meta.argTypes, "offcanvas", { innerHTML });

const navlinks1b = [
  {
    label: "Settings",
    key: "settings",
    icon: "gear",
    group: "admin",
  },
  {
    label: "Users",
    key: "users",
    icon: "people-fill",
    group: "admin",
  },
  {
    label: "Stats",
    key: "stats",
    icon: "graph-up",
    group: "stats",
  },
];
const navlinks1 = [
  {
    label: "Home",
    key: "home",
    icon: "house-door",
  },
  {
    label: "Dashboard",
    key: "dashboard",
    icon: "speedometer",
  },
  {
    label: "Settings",
    key: "settings",
    icon: "gear",
    group: "admin",
  },
  {
    label: "Users",
    key: "users",
    icon: "people-fill",
    group: "admin",
  },
  {
    label: "Stats",
    key: "stats",
    icon: "graph-up",
    group: "stats",
  },
];
const navlinks3 = [
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
    label: "Settingsss",
    key: "settingsss",
    icon: "gear",
    group: "admin",
    subLinks: [
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
    ],
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
const navlinks0 = [
  {
    label: "Home",
    key: "home",
    icon: "house-door",
  },
  {
    label: "Dashboard",
    key: "dashboard",
    icon: "speedometer",
  },
  {
    label: "Settings",
    key: "settings",
    icon: "gear",
  },
  {
    label: "Users",
    key: "users",
    icon: "people-fill",
  },
  {
    label: "Stats",
    key: "stats",
    icon: "graph-up",
  },
];

const groups1 = [
  {
    key: "stats",
    label: "statistiche",
  },
  {
    key: "admin",
    label: "amministrazione",
  },
];

export const BasicOffcanvas = Template.bind({});
BasicOffcanvas.args = {
  id: "BasicOffcanvas",
  navlinks: navlinks0,
};
export const BasicOffcanvasOpen = Template.bind({});
BasicOffcanvasOpen.args = {
  opened: true,
  id: "BasicOffcanvasOpen",
  navlinks: navlinks0,
};
export const BasicOffcanvasOnSettings = Template.bind({});
BasicOffcanvasOnSettings.args = {
  opened: true,
  id: "BasicOffcanvasOnSettings",
  navlinks: navlinks0,
  navpage: "settings",
};
export const BasicOffcanvasWithGroups = Template.bind({});
BasicOffcanvasWithGroups.args = {
  opened: true,
  id: "BasicOffcanvasWithGroups",
  navlinks: navlinks1b,
  groups: groups1,
};
export const BasicOffcanvasWithGroupsOnSettings = Template.bind({});
BasicOffcanvasWithGroupsOnSettings.args = {
  opened: true,
  id: "BasicOffcanvasWithGroupsOnSettings",
  navlinks: navlinks1,
  groups: groups1,
  navpage: "settings",
};
export const BasicOffcanvasWithAutoGroupsOnSettings = Template.bind({});
BasicOffcanvasWithAutoGroupsOnSettings.args = {
  opened: true,
  id: "BasicOffcanvasWithAutoGroupsOnSettings",
  navlinks: navlinks1,
  navpage: "settings",
};

export const BasicOffcanvasWithAutoGroupsOnSettingsAndBadge = Template.bind({});
BasicOffcanvasWithAutoGroupsOnSettingsAndBadge.args = {
  opened: true,
  id: "BasicOffcanvasWithAutoGroupsOnSettingsAndBadge",
  navlinks: navlinks2,
  navpage: "settings",
};
export const OffcanvasWithFooter = Template.bind({});
OffcanvasWithFooter.args = {
  opened: true,
  id: "OffcanvasWithFooter",
  navlinks: navlinks2,
  navpage: "settings",
  enablefooter: true,
};

export const OffcanvasWithFooterCustom = Template.bind({});
OffcanvasWithFooterCustom.args = {
  opened: true,
  id: "OffcanvasWithFooterCustom",
  navlinks: navlinks2,
  navpage: "settings",
  enablefooter: true,
};

export const OffcanvasWithFooterCustomDesktop = Template.bind({});
OffcanvasWithFooterCustomDesktop.args = {
  opened: true,
  id: "OffcanvasWithFooterCustomDesktop",
  navlinks: navlinks2,
  navpage: "settings",
  enablefooter: true,
  type: "open",
};
export const OffcanvasMultilevel = Template.bind({});
OffcanvasMultilevel.args = {
  opened: true,
  id: "OffcanvasMultilevel",
  navlinks: navlinks3,
  navpage: "settings",
  enablefooter: true,
  type: "open",
};
