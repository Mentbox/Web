import { overlay } from "overlay-kit";
import Toast from "../modules/Toast";

function useToast() {
  const showToast = (message: string, onClick?: () => void) => {
    overlay.open(({ isOpen, close, unmount }) => (
      <Toast
        isOpen={isOpen}
        close={close}
        onExit={unmount}
        message={message}
        onClick={onClick}
      />
    ));
  };

  return { showToast };
}

export default useToast;
