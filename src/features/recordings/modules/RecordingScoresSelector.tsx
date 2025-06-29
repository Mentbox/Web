import Slider from "@/src/components/Slider";

type Props = {
  memoryScore: number;
  pronunciationScore: number;
  toneScore: number;
  onChangeMemoryScore: (score: number) => void;
  onChangePronunciationScore: (score: number) => void;
  onChangeToneScore: (score: number) => void;
};

function RecordingScoresSelector({
  memoryScore,
  pronunciationScore,
  toneScore,
  onChangeMemoryScore,
  onChangePronunciationScore,
  onChangeToneScore,
}: Props) {
  return (
    <section className="flex flex-col gap-[8px]">
      <h1 className="b1">점수</h1>

      <div className="flex flex-col gap-[4px]">
        <div className="flex flex-col gap-[8px] px-[16px] py-[12px] bg-white rounded-[8px] shadow-white">
          <div className="flex items-center gap-[8px] b1">
            <label className="text-gray-300 w-[32px]">암기</label>
            <span className="text-blue-300">{memoryScore}% </span>
          </div>

          <div className="flex flex-col gap-[6px]">
            <Slider value={memoryScore} onChange={onChangeMemoryScore} />

            <div className="flex items-center justify-between caption text-gray-300">
              <span>0</span>
              <span>100</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] px-[16px] py-[12px] bg-white rounded-[8px] shadow-white">
          <div className="flex items-center gap-[8px] b1">
            <label className="text-gray-300 w-[32px]">발음</label>
            <span className="text-blue-300">{pronunciationScore}%</span>
          </div>

          <div className="flex flex-col gap-[2px]">
            <Slider
              value={pronunciationScore}
              onChange={onChangePronunciationScore}
            />

            <div className="flex items-center justify-between caption text-gray-300">
              <span>0</span>
              <span>100</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] px-[16px] py-[12px] bg-white rounded-[8px] shadow-white">
          <div className="flex items-center gap-[8px] b1">
            <label className="text-gray-300 w-[32px]">톤</label>
            <span className="text-blue-300">{toneScore}%</span>
          </div>

          <div className="flex flex-col gap-[2px]">
            <Slider value={toneScore} onChange={onChangeToneScore} />

            <div className="flex items-center justify-between caption text-gray-300">
              <span>0</span>
              <span>100</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecordingScoresSelector;
