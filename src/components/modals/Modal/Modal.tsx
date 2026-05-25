import classes from "./Modal.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

type Modal = {
  //   label: string;
  ariaLabel: string;
  children: ReactNode;
  toggle: () => void;
  className: string;
};

export function Modal({ ariaLabel, children, toggle, className }: Modal) {
  const refModal = useRef<HTMLDivElement | null>(null);
  const refCallback = useClickOutside(toggle);

  useEffect(() => {
    refModal.current?.focus();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      tabIndex={-1}
      ref={refModal}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        ref={refCallback}
        className={cn(classes.modal, className)}
      >
        {children}
      </div>
    </motion.div>
  );
}
