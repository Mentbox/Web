import { AnimatePresence, motion, TargetAndTransition } from "motion/react";
import { useEffect } from "react";

type Props = React.PropsWithChildren<{
  isOpen: boolean;
  close: () => void;
  onExit: () => void;
  className?: string;
  animationConfig?: {
    initial: TargetAndTransition;
    animate: TargetAndTransition;
    exit: TargetAndTransition;
  };
}>;

const DURATION = 150 / 1000;

function Modal({
  isOpen,
  close,
  onExit,
  className,
  animationConfig,
  children,
}: Props) {
  const handleBackdropClick = () => close();

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
          className="z-50 fixed inset-0 bg-black/20 flex flex-col justify-center px-5"
        >
          <motion.section
            initial={animationConfig?.initial ?? { opacity: 0 }}
            animate={animationConfig?.animate ?? { opacity: 1 }}
            exit={animationConfig?.exit ?? { opacity: 0 }}
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

export default Modal;
