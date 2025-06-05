import { IRecording } from "../common/types";

type Props = {
  recording: IRecording;
};

function HomeRecordingCard({ recording }: Props) {
  const color =
    recording.type === "blue"
      ? {
          textColor: "text-[var(--color-primary)]",
          timeColor: "bg-[#E8EDFF] border-[#B6C7FF]",
        }
      : {
          textColor: "text-[#1ED982]",
          timeColor: "bg-[#E9FBF3] border-[#C7F1DE]",
        };

  function getDateLabel(dateStr: string): string {
    const fullDateStr = `20${dateStr}`;
    const givenDate = new Date(fullDateStr);
    const today = new Date();

    givenDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = today.getTime() - givenDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "오늘";
    return `${diffDays}일 전`;
  }

  return (
    <div className="flex flex-row h-[94px] w-full bg-white rounded-xl p-4 justify-between items-center">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <span className="text-gray-500 text-[12px]">
            {getDateLabel(recording.date)}
          </span>
          <span className="text-[18px]">{recording.title}</span>
        </div>
        <div className="flex flex-row gap-[10px]">
          <div className="flex text-[14px] gap-[4px]">
            <span className="text-gray-500">암기</span>
            <span className={color.textColor}>{recording.memoryScore}%</span>
          </div>
          <div className="flex text-[14px] gap-[4px]">
            <span className="text-gray-500">발음</span>
            <span className={color.textColor}>{recording.accentScore}%</span>
          </div>
          <div className="flex text-[14px] gap-[4px]">
            <span className="text-gray-500">톤</span>
            <span className={color.textColor}>{recording.toneScore}%</span>
          </div>
        </div>
      </div>
      <div
        className={`flex h-[48px] w-[48px] rounded-4xl ${color.timeColor} border-[1px] items-center justify-center`}
      >
        <span className={color.textColor}>{recording.time}분</span>
      </div>
    </div>
  );
}

export default HomeRecordingCard;
