import { renderHook } from "@testing-library/react";
import { useAddToWishlist } from "@/hooks/wishlist/useAddToWishlist";
import { useRemoveFromWishlist } from "@/hooks/wishlist/useRemoveFromWishlist";
import { useWishlistQuery } from "@/hooks/wishlist/useWishlistQuery";
import { useWishlist } from "@/hooks/wishlist/useWishlist";
import { act, ReactNode } from "react";
import { UserProvider } from "@/context/UserContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { TOKEN, USER } from "@/data/localStorageKey";
import { getWrapper } from "@/tests/getWrapper";

vi.mock("@/hooks/wishlist/useWishlistQuery", () => ({ useWishlistQuery: vi.fn() }));
vi.mock("@/hooks/wishlist/useAddToWishlist", () => ({ useAddToWishlist: vi.fn() }));
vi.mock("@/hooks/wishlist/useRemoveFromWishlist", () => ({ useRemoveFromWishlist: vi.fn() }));

describe("useWishlist", () => {
  const AllProviders = ({ children }: { children: ReactNode }) => {
    const Wrapper = getWrapper();
    return (
      <Wrapper>
        <UserProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </UserProvider>
      </Wrapper>
    );
  };

  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  test("should handle guest mode (localStorage toggle)", () => {
    vi.mocked(useWishlistQuery).mockReturnValue(
      { data: [] } as unknown as ReturnType<typeof useWishlistQuery>,
    );

    const mockAdd = vi.fn();
    vi.mocked(useAddToWishlist).mockReturnValue({
      mutate: mockAdd,
      isPending: false,
      variables: [],
    } as unknown as ReturnType<typeof useAddToWishlist>);
    vi.mocked(useRemoveFromWishlist).mockReturnValue({
      mutate: vi.fn(),
      isPending: false,
      variables: undefined,
    } as unknown as ReturnType<typeof useRemoveFromWishlist>);

    const { result } = renderHook(() => useWishlist("prod_1"), {
      wrapper: AllProviders,
    });

    act(() => {
      result.current.toggleLike();
    });

    expect(result.current.liked).toBe(true);
    expect(mockAdd).not.toHaveBeenCalled();
  });

  test("should call remove.mutate when user is logged and product is liked", () => {
    window.localStorage.setItem(TOKEN, JSON.stringify("fake-token"));
    window.localStorage.setItem(USER, JSON.stringify("fake-token"));

    const mockRemove = vi.fn();
    vi.mocked(useRemoveFromWishlist).mockReturnValue({
      mutate: mockRemove,
      isPending: false,
    } as unknown as ReturnType<typeof useRemoveFromWishlist>);
    vi.mocked(useWishlistQuery).mockReturnValue(
      { data: [{ id: "prod_1" }] } as unknown as ReturnType<
        typeof useWishlistQuery
      >,
    );

    const { result } = renderHook(() => useWishlist("prod_1"), {
      wrapper: AllProviders,
    });

    expect(result.current.liked).toBe(true);

    act(() => {
      result.current.toggleLike();
    });

    expect(mockRemove).toHaveBeenCalledWith("prod_1");
  });
});
