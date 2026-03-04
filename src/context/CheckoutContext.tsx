import { createContext, ReactNode, useReducer } from "react";
import { CheckoutContextType, DataProps } from "../types/checkoutTypes";
import { createContextHook } from "../hooks/createContextHook";
import { CHECKOUT_INITIAL } from "../data/checkout";
import { OrderItem } from "../types/orderTypes";
import { DeliveryMethod, PaymentMethod } from "../types/api/options";
import { checkoutReducer } from "../store/reducers/checkout";
import {
  resetCheckoutAction,
  updateDataAction,
  updateDeliveryAction,
  updateItemsAction,
  updatePaymentAction,
} from "../store/actions/checkout";

export const CheckoutContext = createContext<CheckoutContextType | null>(null);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(checkoutReducer, CHECKOUT_INITIAL);

  const updateItems = (items: OrderItem[]) =>
    dispatch(updateItemsAction(items));

  const updateData = (data: DataProps) => dispatch(updateDataAction(data));

  const updateDelivery = (data: DeliveryMethod) =>
    dispatch(updateDeliveryAction(data));

  const updatePayment = (data: PaymentMethod) =>
    dispatch(updatePaymentAction(data));

  const resetCheckout = () => dispatch(resetCheckoutAction());

  return (
    <CheckoutContext.Provider
      value={{
        ...state,

        updateItems,
        updateData,
        updateDelivery,
        updatePayment,
        resetCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckoutContext = createContextHook(
  CheckoutContext,
  CheckoutProvider,
);
