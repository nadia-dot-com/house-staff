import { renderHook, waitFor } from "@testing-library/react";
import { UserProvider, useUserContext } from "@/context/UserContext";
import { act } from "react";
import { useCurrentUser } from "@/hooks/user/useCurrentUser";
import { TOKEN } from "@/data/localStorageKey";
import { UseQueryResult } from "@tanstack/react-query";
import { UserData } from "@/types/userTypes";

vi.mock("@/hooks/user/useCurrentUser", () => ({
  useCurrentUser: vi.fn(),
}));

describe("UserContext", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  test("should update user data when API returns success", async () => {
    vi.mocked(useCurrentUser).mockReturnValue({
      data: { name: "John Doe" },
      isLoading: false,
      error: null,
    } as unknown as UseQueryResult<UserData>);

    const { result } = renderHook(() => useUserContext(), {
      wrapper: UserProvider,
    });

    await waitFor(() => {
      expect(result.current.user).toEqual({ name: "John Doe" });
    });
  });

  test("should logout", () => {
    vi.mocked(useCurrentUser).mockReturnValue({
      data: { name: "John Doe" },
      isLoading: false,
      error: null,
    } as unknown as UseQueryResult<UserData>);

    window.localStorage.setItem("USER", JSON.stringify({ name: "John Doe" }));
    window.localStorage.setItem(TOKEN, "123-test");

    const { result } = renderHook(() => useUserContext(), {
      wrapper: UserProvider,
    });

    act(() => {
      result.current.logout();
    });
    expect(result.current.user).toBeNull();
    expect(result.current.token).toBeNull();
  });
  test("should initialize with data from localStorage", () => {
    const { result } = renderHook(() => useUserContext(), {
      wrapper: UserProvider,
    });

    expect(result.current.isLoginModalOpen).toBe(false);

    act(() => {
      result.current.toggleModalOpen();
    });

    expect(result.current.isLoginModalOpen).toBe(true);
  });
});
