import { describe, expect, it } from "vitest";
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "../types/cart";
import {
  AddToCartAction,
  RemoveFromCartAction,
  UpdateQuantityAction,
} from "../actions/cart";
import { CartState } from "@/types/cartTypes";
import { cartReducer } from "./cart";

describe("cartReducer", () => {
  it("should add new product to cart", () => {
    const initialState: CartState = [
      {
        id: "1",
        name: "Test product",
        img: "test",
        price: 100,
        discount: 0,
        categoryName: "test",
        quantity: 5,
      },
    ];

    const action: AddToCartAction = {
      type: ADD_TO_CART,
      payload: {
        product: {
          id: "1",
          name: "Test product",
          categoryId: "cat-test",
          shortDescription: "test",
          fullDescription: "test",
          price: 100,
          discount: 0,
          releaseDate: "test",
          imagesUrls: ["test"],
          categoryName: "test",
          collectionId: null,
          collectionName: null,
          stockQuantity: 10,
        },
        quantity: 10,
      },
    };

    const result = cartReducer(initialState, action);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("1");
    expect(result[0].quantity).toBe(10);
  });

  it("should remove product to cart by id", () => {
    const initialState: CartState = [
      {
        id: "1",
        name: "Test order item",
        img: "test",
        price: 100,
        discount: 0,
        categoryName: "cat-test",
        quantity: 1,
      },
    ];

    const action: RemoveFromCartAction = {
      type: REMOVE_FROM_CART,
      payload: { id: "1" },
    };

    const result = cartReducer(initialState, action);

    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });

  it("should update quantity of product in cart by id", () => {
    const initialState: CartState = [
      {
        id: "1",
        name: "Test order item",
        img: "test",
        price: 100,
        discount: 0,
        categoryName: "cat-test",
        quantity: 1,
      },
    ];

    const action: UpdateQuantityAction = {
      type: UPDATE_QUANTITY,
      payload: { id: "1", quantity: 2 },
    };

    const result = cartReducer(initialState, action);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("1");
    expect(result[0].quantity).toBe(2);
  });
});
