import { ChangeEvent } from "react";
import classes from "@/components/QuantityInput/QuantityInput.module.scss";
import { cn } from "@/utils/cn";

export function QuantityInput({
  stock,
  quantity,
  onChange,
  size = "default",
}: {
  stock: number;
  quantity: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  size?: "default" | "small";
}) {

  const setQuantity = (value: number) => {
    onChange({
      target: { value: String(value) }
    } as ChangeEvent<HTMLInputElement>)
  };

  const isDecrement = quantity <= 1;
  const isIncrement = quantity >= stock;

  const handleBlur = () => {
    if (!quantity || quantity < 1) {
      setQuantity(1);
    }
  };

  return (
    <div
      className={cn(classes.quantityInput, size === "small" && classes.small)}
    >
      <button
        type="button"
        className={classes.step}
        onClick={() => setQuantity(quantity - 1)}
        disabled={isDecrement}
        aria-label="Decrease quantity"
      >
        &minus;
      </button>
      <input
        type="number"
        name="quantity"
        value={quantity === 0 ? "" : quantity}
        min="1"
        max={stock}
         className={classes.input}
        onChange={onChange}
        onBlur={handleBlur}
        aria-label="Change quantity"
      />
      <button
        type="button"
        className={classes.step}
        onClick={() => setQuantity(quantity + 1)}
        disabled={isIncrement}
        aria-label="Increment quantity"
      >
        &#43;
      </button>
    </div>

  );
}
