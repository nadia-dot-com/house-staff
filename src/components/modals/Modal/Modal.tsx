import classes from "@/components/modals/Modal/Modal.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

type ModalProps = {
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
}: ModalProps) {
  const refModal = useRef<HTMLDivElement | null>(null);
  const refCallback = useClickOutside(toggle);

  const setRefs = (el: HTMLDivElement | null) => {
    refModal.current = el;
    refCallback(el);
  };

  useEffect(() => {
    refModal.current?.focus();

    const handleEsc = (e: KeyboardEvent) => {
      if (e.code === "Escape" && isOpen) {
        toggle();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, toggle]);

  useEffect(() => {
    const handleTab = (event: KeyboardEvent) => {
      if (event.code !== "Tab") return;
      if (!refModal.current) return;
      if (!document.activeElement?.closest('[role="dialog"]')) return;

      const focusableItems = refModal.current?.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const first = focusableItems[0];
      const last = focusableItems[focusableItems.length - 1];

      if (document.activeElement === last && (event.code === "Tab" && !event.shiftKey)) {
        event.preventDefault();
        (first as HTMLElement).focus();
      }

      if (document.activeElement === first && (event.code === "Tab" && event.shiftKey)) {
        event.preventDefault();
        (last as HTMLElement).focus();
      }
    }

    document.addEventListener("keydown", handleTab);

    return () => document.removeEventListener("keydown", handleTab);
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      ref={setRefs}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      aria-label={ariaLabel}
      className={cn(classes.modal, className)}
    >

      {children}
    </motion.div>
  );
}
