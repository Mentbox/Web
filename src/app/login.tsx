import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import getTheme from "../common/styles/theme";
import kakao from "@icons/kakao.svg"
import apple from "@icons/apple.svg"
import Logo from "../components/Logo";

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
          {/** @todo 로그인 btn 구현 후 교체 */}
          <button style={{ backgroundColor: "#FEE500" }} className="flex flex-row items-center justify-center h-[45px] text-[1.125rem] leading-[1.05] rounded-md font-medium transition duration-150 ease-in-out text-black p-[16px]">
            <img src={kakao} width={18} className="absolute left-[40px]" />
            <span className="text-[15px]">카카오 로그인</span>
          </button>
          <button style={{ backgroundColor: "#000000" }} className="flex flex-row items-center justify-center h-[45px] text-[1.125rem] leading-[1.05] rounded-md font-medium transition duration-150 ease-in-out text-white p-[16px]">
            <img src={apple} width={18} className="absolute left-[40px]" />
            <span className="text-[15px]">Apple로 로그인</span>
          </button>
        </main>
      </div>
    </AppScreen>
  );
}

export default LoginScreen;