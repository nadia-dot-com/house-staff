import { DeliveryMethod, PaymentMethod } from "../../types/api/options";
import { DataProps } from "../../types/checkoutTypes";
import { OrderItem } from "../../types/orderTypes";
import {
  RESET_CHECKOUT,
  UPDATE_DATA,
  UPDATE_DELIVERY,
  UPDATE_ITEMS,
  UPDATE_PAYMENT,
} from "../types/checkout";

export type UpdateItemsAction = {
  type: typeof UPDATE_ITEMS;
  payload: { items: OrderItem[] };
};

export type UpdateDataAction = {
  type: typeof UPDATE_DATA;
  payload: { data: DataProps };
};

export type UpdateDeliveryAction = {
  type: typeof UPDATE_DELIVERY;
  payload: { data: DeliveryMethod };
};

export type UpdatePaymentAction = {
  type: typeof UPDATE_PAYMENT;
  payload: { data: PaymentMethod };
};

export type ResetCheckoutAction = {
  type: typeof RESET_CHECKOUT;
};

export type CheckoutAction =
  | UpdateItemsAction
  | UpdateDataAction
  | UpdateDeliveryAction
  | UpdatePaymentAction
  | ResetCheckoutAction;

export const updateItemsAction = (items: OrderItem[]): UpdateItemsAction => ({
  type: UPDATE_ITEMS,
  payload: { items },
});

export const updateDataAction = (data: DataProps): UpdateDataAction => ({
  type: UPDATE_DATA,
  payload: { data },
});

export const updateDeliveryAction = (
  data: DeliveryMethod,
): UpdateDeliveryAction => ({
  type: UPDATE_DELIVERY,
  payload: { data },
});

export const updatePaymentAction = (
  data: PaymentMethod,
): UpdatePaymentAction => ({
  type: UPDATE_PAYMENT,
  payload: { data },
});

export const resetCheckoutAction = (): ResetCheckoutAction => ({
  type: RESET_CHECKOUT,
});
