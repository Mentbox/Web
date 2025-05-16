import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import getTheme from "../../common/styles/theme";
import apple from "@icons/apple.svg";
import Logo from "../../components/Logo";
import LoginButton from "../../components/LoginButton";
import SocialKakao from "./SocialKakao";

const LoginScreen: ActivityComponentType = () => {
  const theme = getTheme();

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
