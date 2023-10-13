import React, { useEffect } from "react";

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
const Toast = () => {
  const messages = useRecoilValue(toastState);

  return (
    <div>
      <div>저기!</div>
      {messages.map((item: MessageType) => (
        <ToastItem key={item.message} message={item.message} />
      ))}
    </div>
  );
};

export default Toast;

const ToastItem = ({ message }: { message: string }) => {
  const messages = useRecoilValue(toastState);
  const setToastState = useSetRecoilState(toastState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastState((datas) => {
        // 시간이 지나면 toastState에서 첫번째 메시지를 삭제
        const updatedMessages = datas.filter((data) => data !== datas[0]);
        return updatedMessages;
      });
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [setToastState, messages]);

  return (
    <div>
      <div>나 렌더링좀 시켜주라</div>
      <div>{message}</div>
    </div>
  );
};
