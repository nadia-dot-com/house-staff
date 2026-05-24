import classes from "./ContactForm.module.scss";
import { Button } from "@/components/Button/Button";
import { CONTACT_FORM_STATE } from "@/constants/contactForm";
import { useContactForm } from "@/hooks/useContactForm";
import { cn } from "@/utils/cn";

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
          <label className={classes.screenReadersOnly} htmlFor="email">
            Email
          </label>
          <input
            autoComplete="email"
            id="email"
            type="email"
            name="email"
            className={classes.field}
            placeholder="Email"
            required
          />
          <label className={classes.screenReadersOnly} htmlFor="name">
            Name
          </label>
          <input
            autoComplete="name"
            id="name"
            type="text"
            name="name"
            className={classes.field}
            placeholder="Your name"
            required
          />
          <label className={classes.screenReadersOnly} htmlFor="phone">
            Phone
          </label>
          <input
            autoComplete="tel"
            id="phone"
            type="tel"
            pattern="[0-9]{9,15}"
            name="phone"
            className={classes.field}
            placeholder="Enter a valid phone number"
            required
          />
          <label className={classes.screenReadersOnly} htmlFor="order">
            Order number
          </label>
          <input
            id="order"
            type="text"
            name="order"
            className={classes.field}
            placeholder="Order number"
            required
          />
          <label htmlFor="message" className={classes.messageTitle}>
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            className={cn(classes.field, classes.textarea)}
            placeholder="Write your message here"
            required
          />
        </div>
        <Button
          bgColor="white"
          textColor="black"
          text={"• SEND ENQUIRY"}
          ariaLabel="send enquiry"
        />
        <p
          role="status"
          aria-live="polite"
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
