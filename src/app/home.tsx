import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import getTheme from "../common/styles/theme";
import Logo from "../components/Logo";
import DefaultProfileImg from "@images/profile.png";
import { useState } from "react";
import { Button } from "../components/Button";
import { useFlow } from "@stackflow/react/future";
import fileIcon from "@icons/파일 아이콘.svg";
import detailIcon from "@icons/detail.svg";

const HomeScreen: ActivityComponentType = () => {
  const theme = getTheme();
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState("");
  const [interestOptions, setInterest] = useState(["취준", "동아리", "운동"]);
  const { push } = useFlow();

  return (
    <AppScreen backgroundColor={theme.gray[50]}>
      <div className="flex flex-col gap-[20px] p-[16px]">
        <Logo long />
        {/* 유저 정보 헤더 */}
        <div className="flex flex-wrap gap-[10px] ">
          <button
            className="relative"
            onClick={() => push("ProfileScreen", {})}
          >
            <img
              src={image ? preview : DefaultProfileImg}
              alt="profile image"
              className="aspect-square w-[48px] object-cover rounded-full shadow-white"
            />
          </button>
          <div>
            <span>홍길동</span>
            <div className="flex flex-wrap gap-[4px]">
              {interestOptions.map((interest) => {
                return (
                  <div
                    className={
                      "bg-gray-100 h-[22px] flex items-center px-[8px] py-[4px] rounded-[20px]"
                    }
                  >
                    <span className="label text-gray-500">{interest}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 파일 관리 */}
        <div className="flex flex-col gap-[20px] items-baseline">
          <button>
            <span className="h1">파일 관리</span>
          </button>
          <main className="grid grid-cols-2 gap-[8px] w-full">
            {/* TODO: 파일 제목 버튼 컴포넌트로 분리 */}
            <button className="bg-white min-w-[167px] min-h-[120px] aspect-[167/120] w-full h-auto rounded-xl p-4 flex flex-row justify-between items-start">
              <div className="flex flex-col gap-[8px] items-baseline">
                <img src={fileIcon} className="w-[40px]" />
                <span className="b1">파일 제목</span>
                <span className="leading-[1] text-[10px] text-gray-500">
                  2025.03.13
                </span>
              </div>
              <img src={detailIcon} className="w-[24px]" />
            </button>
            <button className="bg-white min-w-[167px] min-h-[120px] aspect-[167/120] w-full h-auto rounded-xl"></button>
            <button className="bg-white min-w-[167px] min-h-[120px] aspect-[167/120] w-full h-auto rounded-xl"></button>
            <button className="bg-white min-w-[167px] min-h-[120px] aspect-[167/120] w-full h-auto rounded-xl"></button>
          </main>
        </div>

        {/* 최근 기록 */}
        <div className="flex flex-col gap-[20px] items-baseline">
          <button>
            <h1 className="h1">최근 기록</h1>
          </button>
          <main className="flex flex-col gap-[8px] w-full">
            <button className="h-[94px] w-full bg-white rounded-xl">
              하이 이
            </button>
            <button className="h-[94px] w-full bg-white rounded-xl">
              하이 이
            </button>
          </main>
        </div>
        <Button>연습 시작하기</Button>
      </div>
    </AppScreen>
  );
};

export default HomeScreen;
