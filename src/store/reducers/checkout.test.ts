import { CheckoutState, DataProps } from "@/types/checkoutTypes";
import { describe, expect, it } from "vitest";
import {
  ResetCheckoutAction,
  UpdateDataAction,
  UpdateDeliveryAction,
  UpdateItemsAction,
  UpdatePaymentAction,
} from "../actions/checkout";
import {
  RESET_CHECKOUT,
  UPDATE_DATA,
  UPDATE_DELIVERY,
  UPDATE_ITEMS,
  UPDATE_PAYMENT,
} from "../types/checkout";
import { checkoutReducer } from "./checkout";
import { CHECKOUT_INITIAL } from "@/data/checkout";

const createState = (overrides = {}): CheckoutState => ({
  items: [
    {
      id: "1",
      name: "Test product",
      img: "test",
      price: 100,
      discount: 0,
      categoryName: "test",
      quantity: 5,
    },
  ],
  shippingData: null,
  delivery: null,
  payment: null,
  ...overrides,
});

describe("checkoutReducer", () => {
  it("should replace items with new ones", () => {
    const initialState = createState();

    const action: UpdateItemsAction = {
      type: UPDATE_ITEMS,
      payload: {
        items: [
          {
            id: "2",
            name: "New product",
            img: "test",
            price: 200,
            discount: 0,
            categoryName: "test",
            quantity: 1,
          },
        ],
      },
    };

    const result = checkoutReducer(initialState, action);

    expect(result.items).toHaveLength(1);
    expect(result.items[0].id).toBe("2");
  });

  it("should merge shippingData instead of replacing it", () => {
    const initialState = createState({
      shippingData: {
        fullName: "Old Name",
        city: "Old City",
      },
    });

    const action: UpdateDataAction = {
      type: UPDATE_DATA,
      payload: {
        data: {
          city: "New City",
        } as Partial<DataProps> as DataProps,
      },
    };

    const result = checkoutReducer(initialState, action);

    expect(result.shippingData).toEqual({
      fullName: "Old Name",
      city: "New City",
    });
  });

  it("should update delivery data", () => {
    const initialState = createState();

    const action: UpdateDeliveryAction = {
      type: UPDATE_DELIVERY,
      payload: {
        data: {
          id: "1",
          name: "Standard Shipping",
          price: 15,
        },
      },
    };

    const result = checkoutReducer(initialState, action);

    expect(result.delivery).toEqual(action.payload.data);
  });

  it("should update payment", () => {
    const initialState = createState();

    const action: UpdatePaymentAction = {
      type: UPDATE_PAYMENT,
      payload: {
        data: {
          id: "1",
          name: "Test payment",
        },
      },
    };

    const result = checkoutReducer(initialState, action);

    expect(result.payment).toEqual(action.payload.data);
  });

  it("should reset checkout state", () => {
    const initialState = createState();

    const action: ResetCheckoutAction = {
      type: RESET_CHECKOUT,
    };

    const result = checkoutReducer(initialState, action);

    expect(result).toEqual(CHECKOUT_INITIAL);
  });
});
