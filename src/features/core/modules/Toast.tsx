import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  close: () => void;
  onExit: () => void;
  message: string;
  onClick?: () => void;
};

const DURATION_MS = 1000 * 2;

function Toast({ isOpen, close, onExit, message, onClick }: Props) {
  const handleClick = () => {
    close();
    onClick?.();
  };

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      close();
    }, DURATION_MS);

    return () => {
      clearTimeout(closeTimer);

      if (import.meta.env.DEV) return; // prevent clean up by using strict mode.
      onExit();
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          onClick={handleClick}
          className="z-50 fixed inset-x-[16px] top-[20px] h-[48px] flex items-center justify-center rounded-[8px] bg-black b1 text-white"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toast;
