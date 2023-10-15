import React, { ChangeEvent, FormEventHandler, useEffect } from "react";

import { atom, useRecoilValue, useSetRecoilState } from "recoil";

export const toastState = atom({
  key: "toastState",
  default: [{ message: "12" }],
});

interface MessageType {
  message: string;
}

// 에러 or 알림이 뜨면 toastState에 메시지를 추가
// toastState에 메시지가 있으면, toastList visible;
// item들은 특정 시간동안 toastState에 있다가, 시간이 지나면 or button 클릭하면 사라짐
const Toast = ({
  messages,
  handleSubmit,
}: {
  messages: MessageType[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <div>
      <div style={{ backgroundColor: "pink", padding: "20px" }}>
        {messages.map((item: MessageType) => (
          <ToastItem
            key={item.message}
            message={item.message}
            messages={messages}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>알림올리기</button>
      </form>
    </div>
  );
};

export default Toast;

const ToastItem = ({
  message,
  messages,
}: {
  message: string;
  messages: MessageType[];
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      messages.shift();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [messages]);

  return (
    <div style={{ backgroundColor: "white", marginBottom: "10px" }}>
      <div>{message}</div>
    </div>
  );
};
