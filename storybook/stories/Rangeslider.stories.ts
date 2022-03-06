import { Story, Meta } from "@storybook/html";
import {
  webComponentBind,
  argTypesExtraUtils,
} from "./utils/webComponentUtils";

const meta: Meta = {
  title: "Components/Rangeslider",
  argTypes: {
    id: { control: { disable: true } },
    changeRangeValues: { action: "changeRangeValuesEvent" },
    withbubbles: { type: "boolean" },
    min: { type: "number" },
    max: { type: "number" },
    minval: { type: "number" },
    maxval: { type: "number" },
  },
};

export default meta;

const Template: Story = (args) =>
  webComponentBind(args, meta.argTypes, "range-slider");

export const BasicRangeslider = Template.bind({});
BasicRangeslider.args = {
  id: "BasicRangeslider",
};
export const BasicRangesliderWithBubbles = Template.bind({});
BasicRangesliderWithBubbles.args = {
  id: "BasicRangesliderWithBubbles",
  withbubbles: true,
};
export const BasicRangesliderWithValues = Template.bind({});
BasicRangesliderWithValues.args = {
  id: "BasicRangesliderWithValues",
  withbubbles: true,
  minval: 20,
  maxval: 60,
};
