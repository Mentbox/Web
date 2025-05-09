import { overlay } from "overlay-kit";
import { useRef } from "react";
import LoadingOverlay from "../modules/LoadingOverlay";

function useLoading() {
  const loadingId = useRef<string | null>(null);

  const showLoading = () => {
    overlay.open(({ overlayId, ...rest }) => {
      loadingId.current = overlayId;
      return <LoadingOverlay {...rest} />;
    });
  };

  const hideLoading = () => {
    if (!loadingId.current) return;

    overlay.close(loadingId.current);
  };

  return { showLoading, hideLoading };
}

export default useLoading;
