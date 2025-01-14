import { Story, Meta } from "@storybook/html";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import {
  webComponentBind,
  argTypesExtraUtils,
} from "./utils/webComponentUtils";
import { storybookArgs } from "../../packages/footer/extra/docs";
import { IColumn } from "../../packages/footer/release/webcomponent.type";

const copy1 = Object.assign({}, argTypesExtraUtils);
const copy2 = Object.assign({}, storybookArgs);

const assigned = Object.assign({}, copy1, copy2);
const meta: Meta = {
  title: "Layout/Footer",
  argTypes: assigned,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      // defaultViewport: "desktop",
    },
    layout: "fullscreen",
  },
};

export default meta;

const Template: Story = (args) =>
  webComponentBind(args, meta.argTypes, "footer");

const columns1: IColumn[] = [
  {
    cells: [
      {
        label: "test",
        _id: "test",
      },
      {
        label: "test2",
        _id: "test2",
      },
      {
        label: "test3",
        _id: "test3",
      },
    ],
    title: "stringtitle",
  },
];
const columns2: IColumn[] = [
  {
    cells: [
      {
        label: "test",
        _id: "test",
      },
      {
        label: "test2",
        _id: "test2",
      },
      {
        label: "test3",
        _id: "test3",
      },
    ],
    title: "stringtitle",
  },
  {
    cells: [
      {
        label: "test",
        _id: "test",
      },
      {
        label: "test2",
        _id: "test2",
      },
      {
        label: "test3",
        _id: "test3",
      },
    ],
    title: "stringtitle",
  },
];
const columns3: IColumn[] = [
  {
    cells: [
      {
        label: "test",
        _id: "test",
      },
      {
        label: "test2",
        _id: "test2",
      },
      {
        label: "test3",
        _id: "test3",
      },
    ],
    title: "stringtitle",
  },
  {
    cells: [
      {
        label: "test",
        _id: "test",
      },
      {
        label: "test2",
        _id: "test2",
      },
      {
        label: "test3",
        _id: "test3",
      },
    ],
    title: "stringtitle",
  },
  {
    cells: [
      {
        label: "test",
        _id: "test",
      },
      {
        label: "test2",
        _id: "test2",
      },
      {
        label: "test3",
        _id: "test3",
      },
    ],
    title: "stringtitle",
  },
];

const policies1 = [
  {
    label: "Privacy Policy",
    key: "privacypolicy",
  },
  {
    label: "Condizioni Generali",
    key: "generalcondition",
  },
  {
    label: "Cookie Policy",
    key: "cookiepolicy",
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
const socials1 = {
  facebook: "fbbb",
  youtube: "yttttttt",
};

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

const brandandcontacts1 = {};
const footerbottom1 = {};

export const Footer = Template.bind({});
Footer.args = {
  id: "Footer",
  company: company1,
  brandandcontacts: brandandcontacts1,
  columns: columns1,
  footerbottom: footerbottom1,
  policies: policies1,
  contacts: contacts1,
  socials: socials1,
};

export const FooterMobile = Template.bind({});
FooterMobile.args = {
  id: "FooterMobile",
  company: company1,
  brandandcontacts: brandandcontacts1,
  columns: columns1,
  footerbottom: footerbottom1,
  policies: policies1,
};
FooterMobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
};

export const FooterWithBrand = Template.bind({});
FooterWithBrand.args = {
  id: "FooterWithBrand",
  company: company1,
  brandandcontacts: brandandcontacts1,
};
export const FooterWithColumns = Template.bind({});
FooterWithColumns.args = {
  id: "FooterWithColumns",
  company: company1,
  contacts: contacts1,

  columns: columns1,
};
export const FooterWithBottom = Template.bind({});
FooterWithBottom.args = {
  id: "FooterWithBottom",
  footerbottom: footerbottom1,
  company: company1,
};
