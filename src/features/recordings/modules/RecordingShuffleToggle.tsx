import Icon from "../../../components/Icon";

type Props = {
  isShuffle: boolean;
  toggleShuffle: () => void;
  disabled: boolean;
};

function RecordingPracticeShuffleToggle({
  isShuffle,
  toggleShuffle,
  disabled,
}: Props) {
  return (
    <button
      onClick={toggleShuffle}
      disabled={disabled}
      className={`${
        disabled && "opacity-40"
      } flex flex-col items-start gap-[2px] duration-150`}
    >
      <div className="flex items-center gap-[4px]">
        {isShuffle ? (
          <span className="bg-green-300 aspect-square w-[16px] h-[16px] rounded-[1.6px]">
            <Icon name="check" size={16} color={"#ffffff"} />
          </span>
        ) : (
          <span className="border border-gray-300 aspect-square w-[16px] h-[16px] rounded-[1.6px]" />
        )}
        <span className="label">리스트 랜덤 보기</span>
      </div>
      <div className="caption text-gray-300">
        면접 등 돌발 질문 연습에 활용하면 좋아요!
      </div>
    </button>
  );
}

export default RecordingPracticeShuffleToggle;
