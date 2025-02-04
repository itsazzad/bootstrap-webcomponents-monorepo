import { Story, Meta } from "@storybook/html";
import {
  webComponentBind,
  argTypesExtraUtils,
} from "./utils/webComponentUtils";
import { storybookArgs } from "../../packages/downloader/extra/docs";

const copy1 = Object.assign({}, argTypesExtraUtils);
const copy2 = Object.assign({}, storybookArgs);

const assigned = Object.assign({}, copy1, copy2);
const meta: Meta = {
  title: "Components/Downloader",
  argTypes: assigned,
};

export default meta;

const Template: Story = (args) =>
  webComponentBind(args, meta.argTypes, "downloader");

export const DownloaderTemplate = Template.bind({});
DownloaderTemplate.args = {
  id: "BasicDownloader",
};
