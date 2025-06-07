import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import getTheme from "../common/styles/theme";
import Logo from "../components/Logo";
import { Button } from "../components/Button";
import { useFlow } from "@stackflow/react/future";
import HomeSubTitle from "../features/home/modules/HomeSubTitle";
import HomeFileList from "../features/home/modules/HomeFileList";
import HomeUserHeader from "../features/home/modules/HomeUserHeader";
import HomeRecordingList from "../features/home/modules/HomeRecordingList";

const HomeScreen: ActivityComponentType = () => {
  const theme = getTheme();
  const { push } = useFlow();

  return (
    <AppScreen backgroundColor={theme.gray[50]}>
      <div className="flex flex-col gap-[20px] p-[16px]">
        <Logo long />
        {/* 유저 정보 헤더 */}
        <HomeUserHeader />

        {/* 파일 관리 */}
        <div className="flex flex-col gap-[20px] items-baseline">
          <HomeSubTitle onClick={() => push("FilesScreen", {})}>
            파일 관리
          </HomeSubTitle>
          <HomeFileList />
        </div>

        {/* 최근 기록 */}
        <div className="flex flex-col gap-[20px] items-baseline">
          <HomeSubTitle>최근 기록</HomeSubTitle>
          <HomeRecordingList />
        </div>

        <Button>연습 시작하기</Button>
      </div>
    </AppScreen>
  );
};

export default HomeScreen;
