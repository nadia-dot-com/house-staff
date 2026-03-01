import { CartState } from "../../types/cartTypes";
import { CartAction } from "./cartAction";

export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity } = action.payload;

      const existing = state.find((i) => i.id === product.id);
      if (existing) {
        return state.map((i) =>
          i.id === product.id
            ? {
                ...i,
                quantity: Math.min(
                  i.quantity + quantity,
                  product.stockQuantity,
                ),
              }
            : i,
        );
      }

      return [
        ...state,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          discount: product.discount,
          img: product.imagesUrls[0],
          categoryName: product.categoryName,
          quantity: Math.min(quantity, product.stockQuantity),
        },
      ];
    }
    case "REMOVE_FROM_CART":
      return state.filter((i) => i.id != action.payload.id);
    case "UPDATE_QUANTITY":
      return state.map((i) =>
        i.id === action.payload.id
          ? {
              ...i,
              quantity:
                action.payload.stock != null
                  ? Math.min(action.payload.quantity, action.payload.stock)
                  : action.payload.quantity,
            }
          : i,
      );
    case "CLEAR_CART":
      return [];
    default:
        return state;
  }
}
