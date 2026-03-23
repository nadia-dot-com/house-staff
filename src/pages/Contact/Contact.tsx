import { ContactDescription } from "./ContactDescription/ContactDescription";
import { ContactForm } from "./ContactForm/ContactForm";

import classes from "./Contact.module.css";
import { PageTransition } from "@/components/PageTransition/PageTransition";

export default function Contact() {
  return (
    <div className={classes.contactWrapper}>
      <PageTransition>
        <ContactDescription />
        <ContactForm />
      </PageTransition>
    </div>
  );
}
