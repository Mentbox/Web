import { overlay } from "overlay-kit";
import Dialog, { DialogConfig } from "../modules/Dialog";

function useDialog() {
  const showDialog = (config: DialogConfig) => {
    overlay.open((props) => <Dialog config={config} {...props} />);
  };

  return { showDialog };
}

export default useDialog;
