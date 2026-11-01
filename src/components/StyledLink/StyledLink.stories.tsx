import { StyledLink } from "@/components/StyledLink/StyledLink";
import { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof StyledLink> = {
  component: StyledLink,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof StyledLink>;

export const Default: Story = {
  args: {
    to: "/products",
    children: "Products",
  },
};
