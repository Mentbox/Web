import { AnimatePresence, motion } from "motion/react";
import React, { useEffect } from "react";

type Props = React.PropsWithChildren<{
  isOpen: boolean;
  close: () => void;
  onExit: () => void;
  className?: string;
}>;

const DURATION = 150 / 1000;

function BottomSheet({ isOpen, close, onExit, className, children }: Props) {
  const handleBackdropClick = () => {
    close();
  };

  useEffect(() => {
    return () => {
      if (import.meta.env.DEV) return; // prevent clean up by using strict mode.
      onExit();
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          transition={{
            duration: DURATION,
          }}
          className="z-50 fixed inset-0 bg-black/20 flex flex-col justify-end"
        >
          <motion.section
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            transition={{
              duration: DURATION,
            }}
            onClick={(e) => e.stopPropagation()}
            className={className}
          >
            {children}
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BottomSheet;
