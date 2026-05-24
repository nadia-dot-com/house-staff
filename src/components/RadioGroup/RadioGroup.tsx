import classes from "./RadioGroup.module.scss";

export function RadioGroup<
  T extends { id: string | number; name: string; price?: number },
>({
  title,
  options,
  onClick,
  method,
}: {
  title: string;
  options: T[];
  method: T | null;
  onClick: (option: T) => void;
}) {
  return (
    <fieldset className={classes.wrapper}>
      <legend className={classes.title}>{title}</legend>

      {options.map((option) => {
        const id = `${option.name}-${option.id}`;

        return (
          <div className={classes.option} key={id}>
            <div>
              <label htmlFor={id}>{option.name}</label>
              <input
                id={id}
                className={classes.radio}
                type="radio"
                name={title}
                checked={method?.id === option.id}
                onChange={() => onClick(option)}
              />
            </div>
            {option.price !== undefined && (
              <p className={classes.price}>
                {option.price === 0 ? "$0.00" : `$${option.price.toFixed(2)}`}
              </p>
            )}
          </div>
        );
      })}
    </fieldset>
  );
}
