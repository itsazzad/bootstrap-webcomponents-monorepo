import { Story, Meta } from "@storybook/html";
import {
  webComponentBind,
  argTypesExtraUtils,
} from "./utils/webComponentUtils";
import { storybookArgs } from "../../packages/map/extra/docs";

const copy1 = Object.assign({}, argTypesExtraUtils);
const copy2 = Object.assign({}, storybookArgs);

const assigned = Object.assign({}, copy1, copy2);
const meta: Meta = {
  title: "Map/Map",
  argTypes: assigned,
};

export default meta;

const Template: Story = (args) =>
  webComponentBind(args, meta.argTypes, "map", { style: { height: "400px" } });

export const MapTemplate = Template.bind({});
MapTemplate.args = {
  id: "MapTemplate",
  center: [10, 10],
  zoom: 9,
  source: { type: "osm" },
  options: { centerFromGeometries: true },
  data: [
    {
      marker: {
        lngLat: [10.1, 10],
        icon: {
          uri: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Visual_Studio_Code_Insiders_1.36_icon.svg",
          scale: 0.15,
          anchor: [0.5, 0.1],
        },
        popupHtml: "<p>You clicked here:</p><code>ciao</code>",
      },
    },
    {
      marker: {
        lngLat: [10, 10],
        popupHtml: "<p>You clicked here:</p><code>ciao</code>",
      },
    },
    {
      marker: {
        lngLat: [10.3, 10],
      },
    },
  ],
};

export const MapTemplate2 = Template.bind({});
MapTemplate2.args = {
  id: "MapTemplate2",
  center: [15.084139339274458, 37.517380419266615],
  zoom: 16,
  source: { type: "osm" },
  data: [
    {
      marker: {
        lngLat: [15.084139339274458, 37.517380419266615],
      },
    },
  ],
};
