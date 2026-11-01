import { keyBy } from "lodash";
import { CartState } from "@/types/cartTypes";
import {
  AddToCartAction,
  CartAction,
  RemoveFromCartAction,
  UpdateQuantityAction,
} from "@/store/actions/cart";
import { createReducer } from "@/store/helpers/createReducer";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from "@/store/types/cart";

const addToCart = (state: CartState, action: AddToCartAction) => {
  const { product, quantity } = action.payload;

  const { [product.id]: existingItem, ...restState } = keyBy(state, "id");
  let itemInCart = existingItem;

  if (!itemInCart) {
    itemInCart = {
      id: product.id,
      name: product.name,
      price: product.price,
      discount: product.discount,
      img: product.imagesUrls[0],
      categoryName: product.categoryName,
      quantity: 0,
    };
  }

  return [
    ...Object.values(restState),
    {
      ...itemInCart,
      quantity: Math.min(itemInCart.quantity + quantity, product.stockQuantity),
    },
  ];
};

const removeFromCart = (state: CartState, action: RemoveFromCartAction) =>
  state.filter((i) => i.id != action.payload.id);

const updateQuantity = (state: CartState, action: UpdateQuantityAction) =>
  state.map((i) =>
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

export const cartReducer = createReducer<CartState, CartAction>([], {
  [ADD_TO_CART]: addToCart,
  [REMOVE_FROM_CART]: removeFromCart,
  [UPDATE_QUANTITY]: updateQuantity,
  [CLEAR_CART]: () => [],
});
