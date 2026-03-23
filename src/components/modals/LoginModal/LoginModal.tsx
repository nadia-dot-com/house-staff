import classes from "./LoginModal.module.css";
import { useUserContext } from "@/context/UserContext";
import { useClickOutside } from "@/hooks/useClickOutside";
import { LoginButton } from "../../LoginButton/LoginButton";
import { motion } from "motion/react";

export function LoginModal() {
  const { toggleModalOpen } = useUserContext();
  const refCallback = useClickOutside(toggleModalOpen);

  return (
    <motion.div
      key="login-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Login"
        ref={refCallback}
        className={classes.loginModal}
      >
        <h2>LogIn/SingIn</h2>
        <LoginButton text="Continue with Google" />
      </div>
    </motion.div>
  );
}
