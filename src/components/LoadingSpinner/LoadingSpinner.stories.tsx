import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof LoadingSpinner> = {
  component: LoadingSpinner,
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {};
