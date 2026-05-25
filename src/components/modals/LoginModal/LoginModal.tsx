import classes from "./LoginModal.module.scss";
import { useUserContext } from "@/context/UserContext";
import { LoginButton } from "../../LoginButton/LoginButton";
import { Modal } from "../Modal/Modal";

export function LoginModal() {
  const { toggleModalOpen, isLoginModalOpen } = useUserContext();

  return (
    <Modal
      key="login-modal"
      ariaLabel="Login"
      toggle={toggleModalOpen}
      className={classes.loginModal}
      isOpen={isLoginModalOpen}
    >
      <h2>Log In / Sign In</h2>
      <LoginButton text="Continue with Google" />
    </Modal>
  );
}
