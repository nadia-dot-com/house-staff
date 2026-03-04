import { Button } from "../../../components/Button/Button";
import { CONTACT_FORM_STATE } from "../../../constants/contactForm";
import { useContactForm } from "../../../hooks/useContactForm";
import { cn } from "../../../utils/cn";
import classes from "./ContactForm.module.css";

export function ContactForm() {
  const {
    mutate: sendContactForm,
    isError,
    isSuccess,
    isPending,
    formRef,
  } = useContactForm();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendContactForm(event.currentTarget);
  };

  return (
    <section className={classes.formWrapper}>
      <form
        className={classes.form}
        onSubmit={(e) => handleSubmit(e)}
        ref={formRef}
        autoComplete="on"
      >
        <h2 className={classes.title}>Enquiry Form</h2>
        <p className={classes.desc}>
          Contact our Customer Services team by completing the form. We will
          endeavour to respond within 24 hours.
        </p>
        <div className={classes.inputBox}>
          <input
            type="email"
            name="email"
            className={classes.field}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="name"
            className={classes.field}
            placeholder="Your name"
            required
          />
          <input
            type="tel"
            pattern="[0-9]{9,15}"
            name="phone"
            className={classes.field}
            placeholder="Enter a valid phone number"
            required
          />
          <input
            type="text"
            name="order"
            className={classes.field}
            placeholder="Order number"
            required
          />
          <p className={classes.messageTitle}>Your message</p>
          <textarea
            name="message"
            className={cn(classes.field, classes.textarea)}
            placeholder="Write your message here"
            required
          />
        </div>
        <Button bgColor="white" textColor="black" text={"• SEND ENQUIRY"} />
        <p
          className={cn(
            classes.result,
            isSuccess && classes.success,
            isError && classes.error,
          )}
        >
          {isSuccess && CONTACT_FORM_STATE.success}
          {isError && CONTACT_FORM_STATE.error}
          {isPending && "Sending..."}
        </p>
      </form>
    </section>
  );
}
