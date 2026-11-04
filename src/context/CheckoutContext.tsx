import { createContext, ReactNode, useCallback, useMemo, useReducer } from "react";
import { CheckoutContextType, DataProps } from "@/types/checkoutTypes";
import { createContextHook } from "@/hooks/createContextHook";
import { CHECKOUT_INITIAL } from "@/data/checkout";
import { OrderItem } from "@/types/orderTypes";
import { DeliveryMethod, PaymentMethod } from "@/types/api/options";
import { checkoutReducer } from "@/store/reducers/checkout";
import {
  resetCheckoutAction,
  updateDataAction,
  updateDeliveryAction,
  updateItemsAction,
  updatePaymentAction,
} from "@/store/actions/checkout";

// eslint-disable-next-line react-refresh/only-export-components -- context + provider + hook are colocated by design
export const CheckoutContext = createContext<CheckoutContextType | null>(null);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(checkoutReducer, CHECKOUT_INITIAL);

  const updateItems = useCallback(
    (items: OrderItem[]) => dispatch(updateItemsAction(items)),
    [dispatch],
  );

  const updateData = useCallback(
    (data: DataProps) => dispatch(updateDataAction(data)),
    [dispatch],
  );

  const updateDelivery = useCallback(
    (data: DeliveryMethod) => dispatch(updateDeliveryAction(data)),
    [dispatch],
  );

  const updatePayment = useCallback(
    (data: PaymentMethod) => dispatch(updatePaymentAction(data)),
    [dispatch],
  );

  const resetCheckout = useCallback(
    () => dispatch(resetCheckoutAction()),
    [dispatch],
  );

  const value = useMemo(
    () => ({
      ...state,
      updateItems,
      updateData,
      updateDelivery,
      updatePayment,
      resetCheckout,
    }),
    [state, updateItems, updateData, updateDelivery, updatePayment, resetCheckout],
  );

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- context + provider + hook are colocated by design
export const useCheckoutContext = createContextHook(
  CheckoutContext,
  CheckoutProvider,
);
