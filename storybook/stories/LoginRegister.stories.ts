import { Story, Meta } from "@storybook/html";
import { createLoginRegister, LoginRegisterProps } from "./LoginRegister";

export default {
  title: "Components/LoginRegister",
  argTypes: {
    type: {
      options: ["login", "register"],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
    language: { type: "string" },
    loginuri: { type: "string" },
    registeruri: { type: "string" },
    login: { action: "loginEvent" },
    register: { action: "registerEvent" },
  },
} as Meta;

const Template: Story<LoginRegisterProps> = (args) => createLoginRegister(args);

export const Login = Template.bind({});
Login.args = {
  type: "login",
};
export const Register = Template.bind({});
Register.args = {
  type: "register",
};
export const LoginEn = Template.bind({});
LoginEn.args = {
  type: "login",
  language: "en",
};

export const LoginEnWithFetch = Template.bind({});
LoginEnWithFetch.args = {
  type: "login",
  language: "en",
  loginuri: "https://kernel.free.beeceptor.com/login",
  registeruri: "https://kernel.free.beeceptor.com/register",
};
export const LoginEnWithOauth = Template.bind({});
LoginEnWithOauth.args = {
  type: "login",
  language: "en",
  loginuri: "https://kernel.free.beeceptor.com/login",
  registeruri: "https://kernel.free.beeceptor.com/register",
  oauth2providers: [
    {
      provider: "google",
      uri:
        "https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=https%3A//oauth2.example.com/code&client_id=client_id",
    },
    { provider: "facebook" },
    { provider: "twitter" },
  ],
};
