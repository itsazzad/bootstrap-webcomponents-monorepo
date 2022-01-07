import { Story, Meta } from "@storybook/html";
import { createFormTextInput, FormTextInputProps } from "./FormTextInput";
// import type { FormSchemaEntry } from "../../packages/formtextinputrenderer/app/types/webcomponent.type";

export default {
  title: "Form/FormTextInput",
  argTypes: {
    id: { control: { disable: true } },
  },
} as Meta;

const inputEntry1 = {
  type: "text",
  placeholder: "Insert your last name here...",
  id: "lastName",
  required: true,
  label: "Last Name",
  validationTip: "This field cannot be empty.",
};

const Template: Story<FormTextInputProps> = (args) => createFormTextInput(args);

export const FormTextInputTemplate = Template.bind({});
FormTextInputTemplate.args = {
  id: "BasicFormTextInput",
  schemaentry: inputEntry1,
};
