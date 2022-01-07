import { Story, Meta } from "@storybook/html";
import { createFunnel, FunnelProps } from "./Funnel";

export default {
  title: "Form/Funnel",
  argTypes: {
    id: { control: { disable: true } },
    submitstep: {
      options: ["no", "yes"],
      control: { type: "select" },
    },
    update: { action: "updateEvent" },
    submit: { action: "submitEvent" },
  },
} as Meta;
const preferences = [
  {
    type: "text",
    placeholder: "Inserisci titolo di default",
    id: "defaultTitle",
    required: true,

    label: "Titolo di default",
    value: "numtest",
    params: {
      minlength: 8,
      maxlength: 120,
    },
  },
  {
    type: "number",
    id: "age",
    required: true,
    label: "Age",
    value: 9,
    params: {
      min: 8,
      max: 120,
    },
    validationTip: "Min 8, Max 120",
  },
];
const preferences2 = [
  {
    type: "text",
    placeholder: "Inserisci titolo di default2",
    id: "defaultTitle2",
    required: true,

    label: "Titolo di default2",
    value: "ntest2",
    params: {
      minlength: 8,
      maxlength: 120,
    },
  },
  {
    type: "number",
    id: "age2",
    required: true,
    label: "Age2",
    value: 20,
    params: {
      min: 8,
      max: 120,
    },
    validationTip: "Min 8, Max 120",
  },
];
const preferences3 = [
  {
    type: "text",
    placeholder: "Inserisci titolo di default3",
    id: "defaultTitle3",
    required: true,

    label: "Titolo di default3",
    value: "ntest3",
    params: {
      minlength: 8,
      maxlength: 120,
    },
  },
];
const preferences4 = [
  {
    type: "text",
    placeholder: "Inserisci titolo di default4",
    id: "defaultTitle4",
    required: true,

    label: "Titolo di default4",
    value: "ntest36666666",
    params: {
      minlength: 8,
      maxlength: 120,
    },
  },
];
const Template: Story<FunnelProps> = (args) => createFunnel(args);

export const BasicFunnelTemplate = Template.bind({});
BasicFunnelTemplate.args = {
  id: "BasicFunnelTemplate",
  schemes: [preferences],
};
export const BasicFunnelTemplateWith2StepsSchema = Template.bind({});
BasicFunnelTemplateWith2StepsSchema.args = {
  id: "BasicFunnelTemplateWith2StepsSchema",
  schemes: [preferences, preferences2],
};
export const BasicFunnelTemplateWith3StepsSchema = Template.bind({});
BasicFunnelTemplateWith3StepsSchema.args = {
  id: "BasicFunnelTemplateWith3StepsSchema",
  schemes: [preferences3, preferences2, preferences],
};
export const BasicFunnelTemplateWith4StepsSchema = Template.bind({});
BasicFunnelTemplateWith4StepsSchema.args = {
  id: "BasicFunnelTemplateWith4StepsSchema",
  schemes: [preferences3, preferences4, preferences2, preferences],
};