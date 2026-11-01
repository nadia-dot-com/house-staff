import classes from "@/pages/Contact/Contact.module.scss";
import { ContactDescription } from "@/pages/Contact/ContactDescription/ContactDescription";
import { ContactForm } from "@/pages/Contact/ContactForm/ContactForm";
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
