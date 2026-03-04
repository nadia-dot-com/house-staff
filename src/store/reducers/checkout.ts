import { CHECKOUT_INITIAL } from "../../data/checkout";
import { CheckoutState } from "../../types/checkoutTypes";
import {
  CheckoutAction,
  UpdateDataAction,
  UpdateDeliveryAction,
  UpdateItemsAction,
  UpdatePaymentAction,
} from "../actions/checkout";
import { createReducer } from "../helpers/createReducer";
import {
  RESET_CHECKOUT,
  UPDATE_DATA,
  UPDATE_DELIVERY,
  UPDATE_ITEMS,
  UPDATE_PAYMENT,
} from "../types/checkout";

const updateItems = (state: CheckoutState, action: UpdateItemsAction) => ({
  ...state,
  items: action.payload.items,
});

const updateData = (state: CheckoutState, action: UpdateDataAction) => ({
  ...state,
  shippingData: { ...state.shippingData, ...action.payload.data },
});

const updateDelivery = (
  state: CheckoutState,
  action: UpdateDeliveryAction,
) => ({ ...state, delivery: action.payload.data });

const updatePayment = (state: CheckoutState, action: UpdatePaymentAction) => ({
  ...state,
  payment: action.payload.data,
});

const resetCheckout = () => CHECKOUT_INITIAL;

export const checkoutReducer = createReducer<CheckoutState, CheckoutAction>(
  CHECKOUT_INITIAL,
  {
    [UPDATE_ITEMS]: updateItems,
    [UPDATE_DATA]: updateData,
    [UPDATE_DELIVERY]: updateDelivery,
    [UPDATE_PAYMENT]: updatePayment,
    [RESET_CHECKOUT]: resetCheckout,
  },
);
