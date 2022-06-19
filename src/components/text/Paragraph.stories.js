import React from "react";
import { Paragraph } from "./Paragraph";

export default {
  title: "Paragraph",
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Hello World",
  size: "sm",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "Hello World",
  size: "sm",
};
