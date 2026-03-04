import { Product } from "../../types/api/product";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from "../types/cart";

export type AddToCartAction = {
  type: typeof ADD_TO_CART;
  payload: { product: Product; quantity: number };
};

export type RemoveFromCartAction = {
  type: typeof REMOVE_FROM_CART;
  payload: { id: string };
};

export type UpdateQuantityAction = {
  type: typeof UPDATE_QUANTITY;
  payload: { id: string; quantity: number; stock?: number };
};

export type ClearCartAction = {
  type: typeof CLEAR_CART;
};

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateQuantityAction
  | ClearCartAction;

export const addToCartAction = (
  product: Product,
  quantity: number,
): AddToCartAction => ({
  type: ADD_TO_CART,
  payload: { product, quantity },
});

export const removeFromCartAction = (id: string): RemoveFromCartAction => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});

export const updateQuantityAction = (
  id: string,
  quantity: number,
  stock?: number,
): UpdateQuantityAction => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity, stock },
});

export const clearCartAction = (): ClearCartAction => ({
  type: CLEAR_CART,
});
