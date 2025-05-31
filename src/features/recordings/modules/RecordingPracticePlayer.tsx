import { useEffect, useState } from "react";
import getTheme from "../../../common/styles/theme";
import Icon from "../../../components/Icon";
import TimeUtil from "@/src/utils/TimeUtils";
import { IMaterial } from "../../files/common/types";

type Props = {
  material: IMaterial;
  onPlay: () => void;
  onTimeOut: () => void;
};

function RecordingPracticePlayer({ material, onPlay, onTimeOut }: Props) {
  const { limitedTime } = material;
  const theme = getTheme();

  const [time, setTime] = useState(limitedTime);
  const [isPlaying, setPlaying] = useState(false);
  const parsed = TimeUtil.parse(time);
  const isTimeOutSoon = parsed.minutes <= 0 && parsed.seconds <= 5;
  const isTimeOut = parsed.minutes <= 0 && parsed.seconds <= 0;

  const play = () => setPlaying(true);
  const stop = () => setPlaying(false);

  useEffect(() => {
    // init
    setTime(material.limitedTime);
  }, [material]);

  useEffect(() => {
    // counter for time
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setTime((prev) => TimeUtil.subtract(prev, 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (!isTimeOut) return;

    onTimeOut();
  }, [isTimeOut]);

  const handlePlayClick = () => {
    if (isPlaying) stop();
    else {
      play();
      onPlay();
    }
  };

  return (
    <div
      className={`${
        isTimeOutSoon ? "bg-blue-50" : "bg-white"
      } flex flex-col gap-[24px] py-[20px] px-[16px] shadow-white rounded-[8px]`}
    >
      <h1 className="text-center b1">
        {(() => {
          if (isTimeOutSoon) return "다음 리스트를 준비해주세요.";
          if (isPlaying) return "연습 진행 중";

          return "재생 버튼을 누르면 연습이 시작됩니다.";
        })()}
      </h1>

      <div className="flex items-center justify-between px-[12%]">
        <button
          onClick={handlePlayClick}
          className={`${
            isTimeOutSoon ? "bg-blue-75" : "bg-blue-50"
          } aspect-square w-[36px] rounded-[5.14px]`}
          disabled={isTimeOut}
        >
          <Icon
            name={isPlaying ? "pause" : "play"}
            size={36}
            color={theme.blue[300]}
          />
        </button>

        <h2 className="title text-blue-300">{isTimeOut ? "00:00" : time}</h2>

        <span className="w-[36px]" />
      </div>
    </div>
  );
}

export default RecordingPracticePlayer;
