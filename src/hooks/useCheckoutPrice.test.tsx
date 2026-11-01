import { renderHook, waitFor } from "@testing-library/react";
import { useCheckoutPrice } from "@/hooks/useCheckoutPrice";
import { getWrapper } from "@/tests/getWrapper";
import { useOptions } from "@/hooks/options/useOptions";
import { UseQueryResult } from "@tanstack/react-query";
import { OptionsResponse } from "@/types/api/options";

vi.mock("@/hooks/options/useOptions", () => ({
  useOptions: vi.fn(),
}));

describe("useCheckoutPrice", () => {
   beforeEach(() => {
    vi.clearAllMocks();
  });
  
  test("should return right calculated result", async () => {
    vi.mocked(useOptions).mockReturnValue({
      data: {
        countries: [{ name: "Poland", code: "cote", vatRate: 23 }],
      },
    } as UseQueryResult<OptionsResponse>);

    const data = {
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
    };

    const { result } = renderHook(() => useCheckoutPrice(data), {
      wrapper: getWrapper(),
    });

    await waitFor(() => {
      expect(result.current.subtotal).toBe(100);
      expect(result.current.vat).toBe(25.3);
      expect(result.current.vat).toBe(25.3);
    });
  });
});