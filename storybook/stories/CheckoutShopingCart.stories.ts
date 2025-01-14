import { Story, Meta } from "@storybook/html";
import {
  webComponentBind,
  argTypesExtraUtils,
} from "./utils/webComponentUtils";
import { storybookArgs } from "../../packages/checkout-shopping-cart/extra/docs";

const copy1 = Object.assign({}, argTypesExtraUtils);
const copy2 = Object.assign({}, storybookArgs);

const assigned = Object.assign({}, copy1, copy2);
const meta: Meta = {
  title: "Components/CheckoutShoppingCart",
  argTypes: assigned,
};

export default meta;

const Template: Story = (args) =>
  webComponentBind(args, meta.argTypes, "checkout-shopping-cart", {
    style: { margin: "20px auto 20px auto" },
  });

export const CheckoutShoppingCart = Template.bind({});

CheckoutShoppingCart.args = {
  id: "CheckoutShoppingCart",
  payment: {
    items: [
      {
        unitaryPrice: 2,
        taxPercentage: 3,
        name: "testitem",
      },
      {
        unitaryPrice: 5,
        taxPercentage: 7,
        name: "testitem2",
      },
    ],
  },
};

export const CheckoutShoppingCartCompleted = Template.bind({});

CheckoutShoppingCartCompleted.args = {
  id: "CheckoutShoppingCartCompleted",
  payment: {
    items: [
      {
        unitaryPrice: 2,
        taxPercentage: 3,
        name: "testitem",
      },
      {
        unitaryPrice: 5,
        taxPercentage: 7,
        name: "testitem2",
      },
    ],
    completed: "yes",
  },
};
