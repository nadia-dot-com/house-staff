import { ErrorState } from "@/components/ErrorState/ErrorState";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof ErrorState> = {
  component: ErrorState,
};

export default meta;

type Story = StoryObj<typeof ErrorState>;

export const Default: Story = {
  args: {
    message: "Error message",
  },
};
