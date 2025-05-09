import { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import getTheme from "../../../common/styles/theme";

type Props = {
  isOpen: boolean;
  unmount: () => void;
};

function LoadingOverlay({ isOpen, unmount }: Props) {
  const theme = getTheme();

  useEffect(() => {
    return () => {
      if (import.meta.env.DEV) return; // prevent clean up by using strict mode.
      unmount();
    };
  }, []);

  if (!isOpen) return <></>;

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-black/20 text-white title">
      <BeatLoader color={theme.app.primary} />
    </div>
  );
}

export default LoadingOverlay;
