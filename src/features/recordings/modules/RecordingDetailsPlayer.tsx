import getTheme from "@/src/common/styles/theme";
import Icon from "@/src/components/Icon";
import TimeUtil from "@/src/utils/TimeUtils";
import { useEffect, useState, useMemo } from "react";

type Props = {
  voiceFile: File;
};

function RecordingDetailsPlayer({ voiceFile }: Props) {
  const theme = getTheme();
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audio = useMemo(() => {
    if (!voiceFile) return null;
    const blob = new Blob([voiceFile], { type: "audio/mpeg" });
    const url = URL.createObjectURL(blob);
    return new Audio(url);
  }, [voiceFile]);

  useEffect(() => {
    if (!audio) return;

    const handleEnded = () => {
      setPlaying(false);
    };

    const handleMetadata = () => {
      if (isFinite(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      } else {
        attemptAlternativeDurationCalculation();
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const attemptAlternativeDurationCalculation = () => {
      const fileSizeInBytes = voiceFile.size;
      const estimatedBitrate = 128 * 1024; // 128kbps in bits per second
      const estimatedDurationInSeconds =
        (fileSizeInBytes * 8) / estimatedBitrate;

      if (
        estimatedDurationInSeconds > 0 &&
        isFinite(estimatedDurationInSeconds)
      ) {
        setDuration(estimatedDurationInSeconds);
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("loadedmetadata", handleMetadata);

    // 오디오 로딩 시작
    audio.load();

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("loadedmetadata", handleMetadata);
      URL.revokeObjectURL(audio.src);
      audio.pause();
    };
  }, [audio, voiceFile]);

  const play = () => {
    if (!audio) return;
    audio.play();
    setPlaying(true);
  };

  const stop = () => {
    if (!audio) return;
    audio.pause();
    setPlaying(false);
  };

  return (
    <section className="flex flex-col gap-[8px]">
      <h1 className="b1">녹음 듣기</h1>

      <div className="flex items-center gap-[8px] p-[16px] bg-white rounded-[8px] shadow-white">
        <button
          onClick={isPlaying ? stop : play}
          className="aspect-square w-[36px] flex items-center justify-center bg-blue-50 rounded-[5px]"
        >
          <Icon
            name={isPlaying ? "pause" : "play"}
            color={theme.blue[300]}
            size={36}
          />
        </button>

        <div className="flex-1 flex items-center gap-[4px]">
          <span className="caption text-gray-500">
            {TimeUtil.formatDuration(currentTime)}
          </span>

          <div className="flex-1 h-[6px] flex rounded-[2px] bg-gray-100 overflow-hidden">
            <div
              className="h-full bg-blue-75 transition-all duration-200"
              style={{
                width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
              }}
            />
          </div>

          <span className="caption text-gray-500">
            {TimeUtil.formatDuration(duration)}
          </span>
        </div>
      </div>
    </section>
  );
}

export default RecordingDetailsPlayer;
