import pkg from "../../lerna.json";

// import type { FormSchemaEntry } from "../../packages/formtextinputrenderer/app/types/webcomponent.type";

export interface FormTextInputProps {
  id: string;
  schemaentry: any;
}

export const createFormTextInput = ({
  id,
  schemaentry,
}: FormTextInputProps) => {
  if (!document.getElementById("formrenderertextinputscript")) {
    const script = document.createElement("script");
    script.id = "formrenderertextinputscript";

    script.src = process.env.PRODUCTION
      ? `https://cdn.jsdelivr.net/npm/@htmlbricks/formrenderer-textinput@${pkg.version}/release/formrenderertextinput.js`
      : "http://localhost:6006/formtextinputrenderer/dist/formrenderertextinput.js";
    document.body.appendChild(script);
  }
  let c: HTMLElement;
  if (document.getElementById(id)) {
    c = document.getElementById(id);
  } else {
    c = document.createElement("formrenderer-textinput");
    c.id = id;
  }
  if (schemaentry) {
    c.setAttribute("schemaentry", JSON.stringify(schemaentry));
  } else {
    if (c.hasAttribute("schemaentry")) c.removeAttribute("schemaentry");
  }
  return c;
};
