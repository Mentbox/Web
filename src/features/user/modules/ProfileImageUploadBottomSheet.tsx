import { RefObject } from "react";
import BottomSheet from "../../../components/BottomSheet";

type Props = {
  isOpen: boolean;
  close: () => void;
  onExit: () => void;
  inputRef: RefObject<HTMLInputElement | null>;
  clear: () => void;
};

function ProfileImageUploadBottomSheet({
  isOpen,
  close,
  onExit,
  inputRef,
  clear,
}: Props) {
  const handleCameraClick = () => {
    inputRef.current?.setAttribute("capture", "environment");
    inputRef.current?.click();
    close();
  };

  const handleLibraryClick = () => {
    inputRef.current?.removeAttribute("capture");
    inputRef.current?.click();
    close();
  };

  const handleDefaultClick = () => {
    clear();
    close();
  };

  return (
    <BottomSheet
      isOpen={isOpen}
      close={close}
      onExit={onExit}
      className="flex flex-col gap-[12px] bg-white rounded-t-[20px] pt-[20px] pb-[60px]"
    >
      <h1 className="px-[20px] b1 text-gray-500">프로필 이미지 변경</h1>

      <div className="flex flex-col b1">
        <button
          onClick={handleCameraClick}
          className="flex px-[24px] py-[16px]"
        >
          사진 찍기
        </button>

        <div className="h-[0.4px] bg-gray-200" />

        <button
          onClick={handleLibraryClick}
          className="flex px-[24px] py-[16px]"
        >
          사진 보관함
        </button>

        <div className="h-[0.4px] bg-gray-200" />

        <button
          onClick={handleDefaultClick}
          className="flex px-[24px] py-[16px]"
        >
          기본 이미지로 변경
        </button>
      </div>
    </BottomSheet>
  );
}

export default ProfileImageUploadBottomSheet;
