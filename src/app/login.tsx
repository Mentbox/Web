import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import getTheme from "../common/styles/theme";
import kakao from "@icons/kakao.svg";
import apple from "@icons/apple.svg";
import Logo from "../components/Logo";
import LoginButton from "../components/LoginButton";

const LoginScreen: ActivityComponentType = () => {
  const theme = getTheme();
  const SocialKakao = () => {
    const Rest_api_key = "28eefe2f218e99fd6fa2d3f6af03169c"; // REST API KEY
    const redirect_uri = "http://localhost:5173/auth"; // Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
    const handleLogin = () => {
      window.location.href = kakaoURL;
    };
    return (
      <>
        <LoginButton src={kakao} color="#FEE500" onClick={handleLogin}>
          카카오 로그인
        </LoginButton>
      </>
    );
  };

  // RedirectURI로 설정해 둔 localhost:3000/auth?code= 로 인가코드가 들어오는 것을 확인할 수 있고, 인가코드 추출은 아래 코드로 가능.
  // const code = new URL(window.location.href).searchParams.get("code");

  return (
    <AppScreen backgroundColor={theme.gray[50]}>
      <div className="flex flex-col gap-[250px] p-[16px]">
        <Logo long />
        <div className="flex flex-col items-center">
          <h1 className="h1">오늘의 연습을 시작해볼까요?</h1>
        </div>
        <main className="flex flex-col gap-[24px]">
          <SocialKakao />
          <LoginButton src={apple} color="#000000">
            Apple로 로그인
          </LoginButton>
        </main>
      </div>
    </AppScreen>
  );
};

export default LoginScreen;
