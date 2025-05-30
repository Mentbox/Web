import getTheme from "../../../common/styles/theme";
import Icon from "../../../components/Icon";

function RecordingPracticePlayer() {
  const theme = getTheme();

  return (
    <div className="flex flex-col gap-[24px] py-[20px] px-[16px] bg-white shadow-white rounded-[8px]">
      <h1 className="text-center b1">재생 버튼을 누르면 연습이 시작됩니다!</h1>

      <div className="flex items-center justify-between px-[12%]">
        <button className="aspect-square w-[36px] rounded-[5.14px] bg-blue-50">
          <Icon name="play" size={36} color={theme.blue[300]} />
        </button>

        <h2 className="title text-blue-300">00:00</h2>

        <span className="w-[36px]" />
      </div>
    </div>
  );
}

export default RecordingPracticePlayer;
