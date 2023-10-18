import React, {
  ChangeEvent,
  FormEventHandler,
  MouseEventHandler,
  useEffect,
} from "react";

import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export const toastState = atom<MessageType[]>({
  key: "toastState",
  default: [],
});

interface MessageType {
  message: string;
}

// 에러 or 알림이 뜨면 toastState에 메시지를 추가
// toastState에 메시지가 있으면, toastList visible;
// item들은 특정 시간동안 toastState에 있다가, 시간이 지나면 or button 클릭하면 사라짐
const Toast = ({ handleSubmit }: { handleSubmit: () => void }) => {
  const [messages, setMessages] = useRecoilState(toastState);

  return (
    <div style={{ backgroundColor: "pink", padding: "20px" }}>
      {messages?.map((item: MessageType) => (
        <ToastItem key={item.message} message={item.message} />
      ))}
    </div>
  );
};

export default Toast;

const ToastItem = ({ message }: { message: string }) => {
  const [messages, setMessages] = useRecoilState(toastState);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages((prev) => prev.filter((item) => item.message !== message));
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message, setMessages]);

  return (
    <div style={{ backgroundColor: "white", marginBottom: "10px" }}>
      <div>{message}</div>
    </div>
  );
};
