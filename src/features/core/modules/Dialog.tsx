import Modal from "../../../components/Modal";

export type DialogConfig = {
  title: string;
  desc?: string;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel?: () => void;
  onConfirm: () => void;
};

type Props = {
  isOpen: boolean;
  close: () => void;
  unmount: () => void;
  config: DialogConfig;
};

function Dialog({ isOpen, close, unmount, config }: Props) {
  const { title, desc, cancelLabel, confirmLabel, onCancel, onConfirm } =
    config;

  const handleCancelClick = () => {
    close();
    onCancel?.();
  };

  const handleConfirmClick = () => {
    close();
    onConfirm();
  };

  return (
    <Modal
      isOpen={isOpen}
      close={close}
      onExit={unmount}
      className={`${
        desc ? "gap-[12px]" : "gap-[20px]"
      } w-[255px] self-center flex flex-col bg-white rounded-[8px] shadow-white p-[24px] pb-[20px]`}
    >
      <h1 className="text-center b1">{title}</h1>

      {desc && <p className=" text-center label text-gray-500">{desc}</p>}

      <div className="flex items-center gap-[12px]">
        <button
          onClick={handleCancelClick}
          className="w-[100px] px-[20px] py-[12px] bg-gray-100 b1 rounded-[4px] duration-150 hover:opacity-80"
        >
          {cancelLabel ?? "취소"}
        </button>
        <button
          onClick={handleConfirmClick}
          className="w-[100px] px-[20px] py-[12px] bg-primary text-white b1 rounded-[4px]  duration-150 hover:opacity-80"
        >
          {confirmLabel ?? "확인"}
        </button>
      </div>
    </Modal>
  );
}

export default Dialog;
