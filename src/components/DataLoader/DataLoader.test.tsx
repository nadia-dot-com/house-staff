import { render, screen } from "@testing-library/react";
import { DataLoader } from "./DataLoader";
import { AppError } from "@/errors";

vi.mock("../LoadingSpinner/LoadingSpinner", () => ({
  LoadingSpinner: () => (<div aria-label="loading">MOcked Spinner</div>),
}));

describe("DataLoader", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test("should show loader and not show children", () => {
    render(
      <DataLoader error={null} loading={true} loaded={false}>
        <div>Test Content</div>
      </DataLoader>,
    );

    expect(screen.queryByLabelText("loading")).toBeVisible();
  });

  test("should show children when loaded", () => {
    render(
      <DataLoader error={null} loading={false} loaded={true}>
        <div>Test Content</div>
      </DataLoader>,
    );

    expect(screen.queryByLabelText("loading")).not.toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeVisible();
  });

  test("should show app error message", () => {
    const message = "No access";
    const error = new AppError(message);

    render(
      <DataLoader error={error} loading={false} loaded={true}>
        <div>Test Content</div>
      </DataLoader>,
    );

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
