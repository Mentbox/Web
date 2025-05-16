import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import getTheme from "../common/styles/theme";
import Logo from "../components/Logo";
import DefaultProfileImg from "@images/profile.png";
import { useState } from "react";
import { Button } from "../components/Button";

const HomeScreen: ActivityComponentType = () => {
  const theme = getTheme();
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState("");
  const [interestOptions, setInterest] = useState(["취준", "동아리", "운동"]);

  return (
    <AppScreen backgroundColor={theme.gray[50]}>
      <div className="flex flex-col gap-[20px] p-[16px]">
        <Logo long />
        {/* 유저 정보 헤더 */}
        <div className="flex flex-wrap gap-[10px] ">
          <button className="relative">
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
          <main className="flex flex-wrap gap-[8px] w-fit">
            <button className="bg-white w-[167px] h-[120px] rounded-xl"></button>
            <button className="bg-white w-[167px] h-[120px] rounded-xl"></button>
            <button className="bg-white w-[167px] h-[120px] rounded-xl"></button>
            <button className="bg-white w-[167px] h-[120px] rounded-xl"></button>
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
