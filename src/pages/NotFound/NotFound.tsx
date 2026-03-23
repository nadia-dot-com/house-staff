import { PageTransition } from "@/components/PageTransition/PageTransition";
import classes from "./NotFound.module.css";

export function NotFounded() {
  return (
    <section className={classes.container}>
      <PageTransition>
        <div className={classes.text}>
          <p className={classes.error}>404</p>
          <p>Sorry, the page was not found.</p>
        </div>
        Looks like this page has been moved or deleted.
      </PageTransition>
    </section>
  );
}
