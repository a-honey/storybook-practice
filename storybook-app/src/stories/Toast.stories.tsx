import React, { ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot, useRecoilState } from "recoil";
import Toast from "./Toast";

import { toastState } from "./Toast";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Toast",
  component: Toast,
  decorators: [
    // story에 임의의 wrapper를 제공
    (story: any) => <div style={{ padding: "3rem" }}>{story()}</div>,
  ],
};
export default meta;

const Template = (args: any) => <Toast {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  messages: [{ message: "안녕하세요" }, { message: "알림입니다" }],
  handleSubmit: action("handleSubmit"),
};
