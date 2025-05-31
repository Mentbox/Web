import getTheme from "@/src/common/styles/theme";
import Icon from "@/src/components/Icon";
import { useState } from "react";

function RecordingDetailsPlayer() {
  const theme = getTheme();
  const [isPlaying, setPlaying] = useState(false);
  const toggle = () => setPlaying((prev) => !prev);

  return (
    <section className="flex flex-col gap-[8px]">
      <h1 className="b1">녹음 듣기</h1>

      <div className="flex items-center gap-[8px] p-[16px] bg-white rounded-[8px] shadow-white">
        <button
          onClick={toggle}
          className="aspect-square w-[36px] flex items-center justify-center bg-blue-50 rounded-[5px]"
        >
          <Icon
            name={isPlaying ? "pause" : "play"}
            color={theme.blue[300]}
            size={36}
          />
        </button>

        <div className="flex-1 flex items-center gap-[4px]">
          <span className="caption text-gray-500">00:00</span>

          <div className="flex-1 h-[6px] flex rounded-[2px] bg-gray-100 overflow-hidden">
            <div className="w-[20%] h-full bg-blue-75" />
          </div>

          <span className="caption text-gray-500">00:00</span>
        </div>
      </div>
    </section>
  );
}

export default RecordingDetailsPlayer;
