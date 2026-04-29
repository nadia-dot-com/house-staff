import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { useWishlistContext, WishlistProvider } from "../WishlistContext";
import { act } from "react";
import { GUEST_WISHLIST_KEY } from "@/data/locatStorageKey";

function TestComponent() {
  const { guestWishlist, toggleGuestWishlist } = useWishlistContext();
  return (
    <div>
      <div data-testid="count">{guestWishlist.length}</div>
      <button
        data-testid="toggle-btn"
        onClick={() => toggleGuestWishlist("prod_1")}
      >
        Toggle
      </button>
      <ul>
        {guestWishlist.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
}

describe("WishlistProvider", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  test("should toggle wishlist", () => {
    render(
      <WishlistProvider>
        <TestComponent />
      </WishlistProvider>,
    );

    const button = screen.getByTestId("toggle-btn");
    const count = screen.getByTestId("count");

    expect(count.textContent).toBe("0");

    fireEvent.click(button);
    expect(count.textContent).toBe("1");
    expect(screen.getByText("prod_1")).toBeTruthy();

    fireEvent.click(button);
    expect(count.textContent).toBe("0");
    expect(screen.queryByText("prod_1")).toBeNull();
  });

  test("should clean wishlist", () => {
    const { result } = renderHook(() => useWishlistContext(), {
      wrapper: WishlistProvider,
    });

    act(() => {
      result.current.cleanGuestWishlist();
    });
    expect(result.current.guestWishlist).toEqual([]);
  });
  test("should initialize with data from localStorage", () => {
    const mockData = ["prod_99"];
    window.localStorage.setItem(GUEST_WISHLIST_KEY, JSON.stringify(mockData));

    const { result } = renderHook(() => useWishlistContext(), {
      wrapper: WishlistProvider,
    });

    expect(result.current.guestWishlist).toEqual(mockData);
  });
});
