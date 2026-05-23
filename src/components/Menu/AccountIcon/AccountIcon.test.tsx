import { fireEvent, render, screen } from "@testing-library/react";
import { AccountIcon } from "./AccountIcon";
import { useUserContext } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes/Routes";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
  useLocation: vi.fn(() => ({ pathname: "/" })),
}));

vi.mock("@/context/UserContext", () => ({
  useUserContext: vi.fn(),
}));

describe("AccountIcon", () => {
  const mockNavigate = vi.fn();
  const mockToggleModalOpen = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
  });

  test("opens login modal when user is not logged in", () => {
    vi.mocked(useUserContext).mockReturnValue({
      user: null,
      isLoginModalOpen: false,
      toggleModalOpen: mockToggleModalOpen,
    } as any);

    render(<AccountIcon />);

    const icon = screen.getByLabelText("Login");
    fireEvent.click(icon);

    expect(mockToggleModalOpen).toHaveBeenCalledTimes(1);
  });

  test("navigates to account page when user exists", () => {
    // Symulujemy zalogowanego użytkownika
    vi.mocked(useUserContext).mockReturnValue({
      user: { id: "1" },
      isLoginModalOpen: false,
      toggleModalOpen: mockToggleModalOpen,
    } as any);

    render(<AccountIcon />);

    const icon = screen.getByLabelText("My Account");
    fireEvent.click(icon);

    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.userAccount);
  });
});
