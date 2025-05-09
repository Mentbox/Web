import { useState } from "react";
import { useRouter } from "../../../app/_root";
import Icon from "../../../components/Icon";
import OutsideClickHandler from "react-outside-click-handler";
import useDialog from "../../core/hooks/useDialog";

function FileCard() {
  const { showDialog } = useDialog();
  const { push } = useRouter();

  const [isVisibleMenu, setVisibleMenu] = useState(false);
  const openMenu = () => setVisibleMenu(true);
  const closeMenu = () => setVisibleMenu(false);

  const title =
    "매우긴 내용매우긴 내용매우긴 내용매우긴 내용매우긴 내용매우긴 내용매우긴 내용매우긴 내용매우긴 내용매우긴 내용";

  const handleClick = () => {
    push("FileDetailsScreen", { fileId: 1 });
  };

  const handleMenuClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    openMenu();
  };

  const handleEditClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    closeMenu();
  };
  const handleRemoveClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    closeMenu();

    showDialog({
      title: "파일을 삭제할까요?",
      confirmLabel: "삭제",
      onConfirm: () => {},
    });
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
          <div className="caption text-gray-500">0000.00.00</div>
        </div>

        <button
          onClick={handleMenuClick}
          className="aspect-square w-[24px] h-[24px] rounded-full bg-gray-100"
        >
          <Icon name="dots" size={24} color={"#fff"} />
        </button>
      </div>

      {isVisibleMenu && (
        <OutsideClickHandler onOutsideClick={closeMenu}>
          <div className="z-10 absolute top-[24px] right-[16px] flex flex-col bg-gray-50 rounded-[8px] shadow-white">
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
  );
}

export default FileCard;
