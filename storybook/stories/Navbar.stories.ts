import { Story, Meta } from "@storybook/html";
import { webComponentBind } from "./utils/webComponentUtils";

const meta: Meta = {
  title: "Layout/Navbar",
  argTypes: {
    id: { control: { disable: true } },
    _testInnerHtml: { control: { disable: true } },
    pagetitle: { control: { type: "text" } },
    companybrandname: { control: { type: "text" } },
    companylogouri: { control: { type: "text" } },
    noburger: { control: { type: "boolean" } },
    navmenuswitch: { action: "navmenuswitchEvent" },
    userClick: { action: "userClickEvent" },
    usermenu: { control: { type: "object" } },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

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

const Template: Story = (args) =>
  webComponentBind(args, meta.argTypes, "navbar");

export const BasicNavbar = Template.bind({});
BasicNavbar.args = {
  id: "BasicNavbar",
  companybrandname: "testbrand",
  companylogouri:
    "https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg",
};
export const BasicNavbarWithTitle = Template.bind({});
BasicNavbarWithTitle.args = {
  id: "BasicNavbarWithTitle",
  companybrandname: "testbrand2",
  pagetitle: "pagetest",
};
export const BasicNavbarWithTitleOpen = Template.bind({});
BasicNavbarWithTitleOpen.args = {
  id: "BasicNavbarWithTitleOpen",
  companybrandname: "testbrand2",
  pagetitle: "pagetest",
  switchopen: true,
};
export const NavbarSlotted = Template.bind({});
NavbarSlotted.args = {
  id: "NavbarSlotted",
  companybrandname: "testbrand2",
  pagetitle: "pagetest",
  switchopen: true,
  _testInnerHtml: '<div slot="right-slot">slott</div>',
};
export const NavbarWithUserMenu = Template.bind({});
NavbarWithUserMenu.args = {
  id: "NavbarWithUserMenu",
  companybrandname: "testbrand",
  companylogouri:
    "https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg",
  usermenu: usermenu1,
};
export const NavbarNoBurger = Template.bind({});
NavbarNoBurger.args = {
  id: "NavbarNoBurger",
  companybrandname: "testbrand",
  companylogouri:
    "https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg",
  usermenu: usermenu1,
  noburger: true,
  _testInnerHtml: '<div slot="right-slot">s</div>',
};
