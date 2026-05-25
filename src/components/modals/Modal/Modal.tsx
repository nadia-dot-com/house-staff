import classes from "./Modal.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

type Modal = {
  ariaLabel: string;
  children: ReactNode;
  toggle: () => void;
  className: string;
  isOpen: boolean;
};

export function Modal({
  ariaLabel,
  children,
  toggle,
  className,
  isOpen,
}: Modal) {
  const refModal = useRef<HTMLDivElement | null>(null);
  const refCallback = useClickOutside(toggle);

  useEffect(() => {
    refModal.current?.focus();

    const handleEsc = (e: KeyboardEvent) => {
      if (e.code !== "Escape" || !isOpen) return;
        toggle();
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, toggle]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={refCallback}
      >
      <div
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        ref={refModal}
        aria-label={ariaLabel}
        className={cn(classes.modal, className)}
      >
        {children}
      </div>
    </motion.div>
  );
}
