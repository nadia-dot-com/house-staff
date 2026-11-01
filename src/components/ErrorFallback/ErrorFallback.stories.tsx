import { ErrorFallback } from "@/components/ErrorFallback/ErrorFallback";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof ErrorFallback> = {
  component: ErrorFallback,
  argTypes: {
    resetErrorBoundary: { action: "resetErrorBoundary called" },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorFallback>;

export const Default: Story = {};
