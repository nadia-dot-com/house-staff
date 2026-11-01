import { fireEvent, render, screen } from "@testing-library/react";
import { RadioGroup } from "@/components/RadioGroup/RadioGroup";

const options = [
  { id: "1", name: "first", price: 10 },
  { id: "2", name: "second", price: 5 },
];

describe("RadioGroup", () => {
  it("should render all options from props", () => {
    render(
      <RadioGroup
        title="Title"
        options={options}
        method={null}
        onClick={() => {}}
      />,
    );

    expect(screen.getByText("first")).toBeVisible();
    expect(screen.getByText("second")).toBeVisible();
  });

  it("should mark the correct option as checked", () => {
    render(
      <RadioGroup
        title="Title"
        options={options}
        method={options[1]}
        onClick={() => {}}
      />,
    );

    const radio = screen.getByLabelText("second") as HTMLInputElement;
    expect(radio.checked).toBe(true);

    const radioFirst = screen.getByLabelText("first") as HTMLInputElement;
    expect(radioFirst.checked).toBe(false);
  });

  it("should call onClick with option data when selected", () => {
    const handleClick = vi.fn();
    render(
      <RadioGroup
        title="Title"
        options={options}
        method={null}
        onClick={handleClick}
      />,
    );

    fireEvent.click(screen.getByLabelText("second"));

    expect(handleClick).toBeCalledTimes(1);
    expect(handleClick).toBeCalledWith(options[1]);
  });

  it("should display price formatted to two decimal places", () => {
    render(
      <RadioGroup
        title="Payment Method"
        options={options}
        method={null}
        onClick={() => {}}
      />,
    );

    expect(screen.getByText("$10.00")).toBeInTheDocument();
    expect(screen.getByText("$5.00")).toBeInTheDocument();
  });
});
