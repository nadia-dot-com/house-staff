import { renderHook, waitFor } from "@testing-library/react";
import { UserProvider, useUserContext } from "../UserContext";
import { act } from "react";
import { useCurrentUser } from "@/hooks/user/useCurrentUser";
import { TOKEN } from "@/data/locatStorageKey";

vi.mock("@/hooks/user/useCurrentUser", () => ({
  useCurrentUser: vi.fn(),
}));

describe("UserContext", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  test("should update user data when API returns success", async () => {
    (useCurrentUser as any).mockReturnValue({
      data: { name: "John Doe" },
      isLoading: false,
      error: null,
    });

    const { result } = renderHook(() => useUserContext(), {
      wrapper: UserProvider,
    });

    await waitFor(() => {
      expect(result.current.user).toEqual({ name: "John Doe" });
    });
  });

  test("should logout", () => {
    (useCurrentUser as any).mockReturnValue({
      data: { name: "John Doe" },
      isLoading: false,
      error: null,
    });

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
    expect(document.body.style.overflow).toBe("hidden");
  });
});
