import { getWrapper } from "@/tests/getWrapper";
import { renderHook } from "@testing-library/react";
import { useOrderFromOrders } from "@/hooks/orders/useOrderFromOrders";
import { useOrders } from "@/hooks/orders/useOrders";
import { UseQueryResult } from "@tanstack/react-query";
import { OrderResponse } from "@/types/api/order.response";

vi.mock("@/hooks/orders/useOrders", () => ({
  useOrders: vi.fn(),
}));

describe("useOrderFromOrders", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should return order by id", () => {
    const mockOrders = [
      { id: "order_1", total: 100 },
      { id: "order_2", total: 200 },
    ];

    vi.mocked(useOrders).mockReturnValue({
      data: mockOrders,
      isLoading: false,
    } as unknown as UseQueryResult<OrderResponse[], Error>);

    const { result } = renderHook(() => useOrderFromOrders("order_2"), {
      wrapper: getWrapper(),
    });

    expect(result.current.order).toEqual(mockOrders[1]);
  });
});
