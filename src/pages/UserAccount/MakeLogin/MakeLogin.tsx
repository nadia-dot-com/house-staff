import { LoginButton } from "@/components/LoginButton/LoginButton";
import classes from "@/pages/UserAccount/MakeLogin/MakeLogin.module.scss";

export function MakeLogin() {
  return (
    <section className={classes.makeLogin}>
      <h3 className={classes.title}>Hi there! Sign in / Log in to continue.</h3>
      <LoginButton text="Continue with Google" />
    </section>
  );
}
