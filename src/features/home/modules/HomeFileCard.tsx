import { useState } from "react";
import { useRouter } from "../../../app/_root";
import Icon from "../../../components/Icon";
import OutsideClickHandler from "react-outside-click-handler";
import useDialog from "../../core/hooks/useDialog";
import DateUtil from "../../../utils/DateUtils";
import useToast from "../../core/hooks/useToast";
import { IFile } from "../../files/common/types";
import useRemoveFileMutation from "../../files/hooks/mutations/useRemoveFileMutation";

type Props = {
  file: IFile;
};

function HomeFileCard({ file }: Props) {
  const { id, title, targetDate } = file;
  const { showDialog } = useDialog();
  const { push } = useRouter();
  const { showToast } = useToast();

  const [isVisibleMenu, setVisibleMenu] = useState(false);
  const openMenu = () => setVisibleMenu(true);
  const closeMenu = () => setVisibleMenu(false);

  const removeFile = useRemoveFileMutation();

  const handleClick = () => {
    push("FileDetailsScreen", { fileId: id });
  };

  const handleMenuClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    openMenu();
  };

  const handleEditClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    closeMenu();
    push("WriteFileScreen", { fileId: id });
  };
  const handleRemoveClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    closeMenu();

    showDialog({
      title: "파일을 삭제할까요?",
      confirmLabel: "삭제",
      onConfirm: () => {
        removeFile(id, {
          onSuccess: () => {
            showToast("파일을 삭제했어요!");
          },
        });
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white min-w-[167px] min-h-[120px] aspect-[167/120] w-full h-auto rounded-xl p-4 flex flex-row justify-between items-start relative"
    >
      <div className="flex flex-col gap-[8px] items-baseline">
        <Icon name="file" size={40} />
        <span className="b1">{title}</span>
        <span className="leading-[1] text-[10px] text-gray-500">
          {DateUtil.formatDot(targetDate)}
        </span>
      </div>
      <div className="relative">
        <button
          onClick={handleMenuClick}
          className="aspect-square w-[24px] h-[24px] rounded-full bg-gray-100"
        >
          <Icon name="dots" size={24} color={"#fff"} />
        </button>
        {isVisibleMenu && (
          <OutsideClickHandler onOutsideClick={closeMenu}>
            <div className="absolute z-10 top-8 right-0 flex flex-col bg-gray-50 rounded-[8px] shadow-white">
              <button
                onClick={handleEditClick}
                className="px-[24px] py-[8px] label"
              >
                수정
              </button>
              <span className="h-[0.4px] bg-gray-200" />
              <button
                onClick={handleRemoveClick}
                className="px-[24px] py-[8px] label"
              >
                삭제
              </button>
            </div>
          </OutsideClickHandler>
        )}
      </div>
    </div>
  );
}

export default HomeFileCard;
