import { CheckoutState } from "../types/checkoutTypes";

export const CHECKOUT_INITIAL: CheckoutState = {
  items: [],
  shippingData: null,
  delivery: null,
  payment: null,
};
