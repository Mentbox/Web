import { useRouter } from "../../../app/_root";
import Icon from "../../../components/Icon";
import DateUtil from "../../../utils/DateUtils";
import getTheme from "../../../common/styles/theme";
import { IFile } from "../../files/common/types";

type Props = {
  file: IFile;
};

function RecordingFileCard({ file }: Props) {
  const { id, title, targetDate } = file;
  const { push } = useRouter();
  const theme = getTheme();

  const handleClick = () => {};

  const handlePracticeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    push("RecordingPracticeScreen", { fileId: id });
  };

  return (
    <div
      onClick={handleClick}
      className="relative flex gap-[10px] px-[16px] py-[12px] bg-white shadow-white rounded-[8px]"
    >
      <Icon name="file" size={40} />

      <div className="min-w-0 flex-1 flex items-center">
        <div className="min-w-0 flex-1 flex flex-col gap-[4px]">
          <h1 className="whitespace-nowrap! text-ellipsis b1 overflow-hidden">
            {title}
          </h1>
          <div className="caption text-gray-500">
            {DateUtil.formatDot(targetDate)}
          </div>
        </div>

        <button
          onClick={handlePracticeClick}
          className="aspect-square w-[28px] rounded-[4px] bg-blue-50"
        >
          <Icon name="play" size={28} color={theme.blue[300]} />
        </button>
      </div>
    </div>
  );
}

export default RecordingFileCard;
