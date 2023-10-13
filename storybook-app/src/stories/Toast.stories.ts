import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot, useRecoilState } from "recoil";
import ToastList from "./Toast";

import { toastState } from "./Toast";

const meta = {
  title: "Toast",
  component: ToastList,
  decorators: [RecoilRoot],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {
    text: "hi",
  },
};

export const Default = () => {
  const [toastMessages, setToastMessages] = useRecoilState(toastState);
  const [newMessage, setNewMessage] = React.useState("");

  // 테스트용 메시지 추가
  const addToastMessage = (message: string) => {
    setToastMessages((prevMessages) => [...prevMessages, { message }]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="새로운 메시지 입력"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={() => addToastMessage(newMessage)}>추가</button>
      <ToastList />
    </div>
  );
};
