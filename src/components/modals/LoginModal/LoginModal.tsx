import classes from "@/components/modals/LoginModal/LoginModal.module.scss";
import { useUserContext } from "@/context/UserContext";
import { LoginButton } from "@/components/LoginButton/LoginButton";
import { Modal } from "@/components/modals/Modal/Modal";

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
