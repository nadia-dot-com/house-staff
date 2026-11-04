import { renderHook } from "@testing-library/react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import { WishlistProvider } from "@/context/WishlistContext";
import { useResolvedWishlist } from "@/hooks/wishlist/useResolvedWishlist";
import { getWrapper } from "@/tests/getWrapper";

import * as wishlistQueryModule from "@/hooks/wishlist/useWishlistQuery";
import * as itemsByIdsModule from "@/hooks/products/useItemsByIds";
import * as userContextModule from "@/context/UserContext";

describe("useResolvedWishlist", () => {
  const QueryWrapper = getWrapper();

  beforeEach(() => {
    vi.restoreAllMocks();
    window.localStorage.clear();
  });

  test("should return user wishlist from API when user is logged in", () => {
    vi.spyOn(userContextModule, "useUserContext").mockReturnValue({
      user: { id: "user_1", email: "user@example.com" },
      token: "fake-token",
      logout: vi.fn(),
      toggleModalOpen: vi.fn(),
      isLoginModalOpen: false,
    } as unknown as ReturnType<typeof userContextModule.useUserContext>);

    const mockUserItems = [{ id: "prod_api", name: "API Product" }];
    vi.spyOn(wishlistQueryModule, "useWishlistQuery").mockReturnValue({
      data: mockUserItems,
      isLoading: false,
      error: null,
    } as unknown as ReturnType<typeof wishlistQueryModule.useWishlistQuery>);

    vi.spyOn(itemsByIdsModule, "useItemsByIds").mockReturnValue({
      filteredProducts: [],
    } as unknown as ReturnType<typeof itemsByIdsModule.useItemsByIds>);

    const { result } = renderHook(() => useResolvedWishlist(), {
      wrapper: ({ children }) => (
        <QueryWrapper>
          <WishlistProvider>{children}</WishlistProvider>
        </QueryWrapper>
      ),
    });

    expect(result.current.wishlist).toEqual(mockUserItems);
  });

  test("should return guest items when user is NOT logged in", () => {
    const mockGuestItems = [{ id: "prod_guest", name: "Guest Item" }];

    vi.spyOn(userContextModule, "useUserContext").mockReturnValue({
      user: null,
      token: null,
    } as unknown as ReturnType<typeof userContextModule.useUserContext>);

    vi.spyOn(wishlistQueryModule, "useWishlistQuery").mockReturnValue({
      data: [],
      isLoading: false,
    } as unknown as ReturnType<typeof wishlistQueryModule.useWishlistQuery>);

    vi.spyOn(itemsByIdsModule, "useItemsByIds").mockReturnValue({
      filteredProducts: mockGuestItems,
    } as unknown as ReturnType<typeof itemsByIdsModule.useItemsByIds>);

    const { result } = renderHook(() => useResolvedWishlist(), {
      wrapper: ({ children }) => (
        <QueryWrapper>
          <WishlistProvider>{children}</WishlistProvider>
        </QueryWrapper>
      ),
    });

    expect(result.current.wishlist).toEqual(mockGuestItems);
  });
});