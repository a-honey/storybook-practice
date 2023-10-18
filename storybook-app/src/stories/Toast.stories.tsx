import React, { ChangeEvent, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import Toast from "./Toast";

import { toastState } from "./Toast";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Toast",
  component: Toast,
  decorators: [
    (Story: any) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
};

export default meta;

const Template = (args: any) => {
  return (
    <div>
      <Toast {...args} />
      <MessageBox />
    </div>
  );
};

export const Default: any = Template.bind({});
Default.args = {
  handleSubmit: action("handleSubmit"),
};

const MessageBox = () => {
  const [data, setData] = useState("");
  const [messages, setMessages] = useRecoilState(toastState);
  const handleClick = () => {
    setMessages((prev) => [...prev, { message: data }]);
    setData("");
  };
  return (
    <div>
      <input
        value={data}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setData(e.target.value)}
      />
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};
