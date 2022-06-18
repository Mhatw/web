import React from "react";
import { Title } from "./Title";

export default {
  title: "Title",
  component: Title,
};

const Template = (args) => <Title {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  text: "Hello World",
  size: "md",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  text: "Hello World",
  size: "md",
};
