import classes from "./ErrorState.module.scss";

export function ErrorState({ message }: { message: string }) {
  return <div className={classes.errorState} role="alert">{message}</div>;
}
