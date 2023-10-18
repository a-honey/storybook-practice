import React, { ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import Toast from "./Toast";

import { toastState } from "./Toast";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Toast",
  component: Toast,
  decorators: [
    // story에 임의의 wrapper를 제공
    (story: any) => (
      <RecoilRoot>
        <div style={{ padding: "3rem" }}>{story()}</div>
      </RecoilRoot>
    ),
  ],
};
export default meta;

const Template = (args: any) => <Toast {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  messages: [{ message: "안녕하세요" }, { message: "알림입니다" }],
  handleSubmit: action("handleSubmit"),
};

const MessageBox = () => {
  const [messages, setMessages] = useRecoilState(toastState);
  setMessages((prev) => [...prev, { message: "hi" }]);
  return <Toast messages={messages} handleSubmit={() => {}} />;
};

const MessageTemplate = () => <MessageBox />;
export const DefaultMessageBox = MessageTemplate.bind({});
