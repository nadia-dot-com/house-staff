import { renderHook, waitFor } from "@testing-library/react";
import { useCheckoutPrice } from "../useCheckoutPrice";
import { getWrapper } from "@/tests/getWrapper";

const createData = (overrides = {}) => ({
  cartItems: [
    {
      id: "1",
      name: "Test",
      img: "test",
      price: 100,
      discount: 0,
      categoryName: "test",
      quantity: 1,
    },
  ],
  country: "Poland",
  delivery: {
    id: "1",
    name: "test-method",
    price: 10,
  },
  ...overrides,
});

describe("useCheckoutPrice", () => {
  test("should return right calculated result", async () => {
    const data = createData();

    const { result } = renderHook(() => useCheckoutPrice(data), { wrapper: getWrapper()});
    await waitFor(() => expect(result.current.subtotal).toEqual(100));
    await waitFor(() =>  expect(result.current.vat).toEqual(25.30));
    await waitFor(() => expect(result.current.total).toEqual(135.30));
  });
});
