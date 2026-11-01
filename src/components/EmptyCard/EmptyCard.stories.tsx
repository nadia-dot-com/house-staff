import { EmptyCard } from "@/components/EmptyCard/EmptyCard";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof EmptyCard> = {
  component: EmptyCard,
};

export default meta;

type Story = StoryObj<typeof EmptyCard>;

export const Default: Story = {};
