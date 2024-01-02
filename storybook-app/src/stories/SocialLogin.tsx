import { useEffect } from "react";

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

const SocialLogin = () => {
  function request_kakao() {
    window.location.href = kakaoURL;
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      console.log("받아온 코드:", code);
    }
  }, []);

  return (
    <div onClick={request_kakao}>
      <img
        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MDNfMTU0%2FMDAxNjIwMDE2ODU0MjQ2.cf6z4ZO6I4v7ZPOD41roIBhzUHH80nHGbt0tGq3_vykg.49I2JeINGJPqQMIY-qwFzmzp7AIwN6zWhC_XL8yG6S8g.PNG.xavisnet%2F%25C4%25AB%25C4%25AB%25BF%25C0%25C5%25E52.png&type=sc960_832"
        alt="카카오로그인"
      />
    </div>
  );
};

export default SocialLogin;
