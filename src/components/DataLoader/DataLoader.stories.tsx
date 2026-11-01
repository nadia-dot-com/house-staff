import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataLoader } from "@/components/DataLoader/DataLoader";

const meta: Meta<typeof DataLoader> = {
  component: DataLoader,
  decorators: [
    (Story) => (
      <div style={{ padding: 40 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DataLoader>;

export const Loading: Story = {
  args: {
    loading: true,
    loaded: false,
    error: null,
    children: <div>Content</div>,
  },
};

export const Loaded: Story = {
  args: {
    loading: false,
    loaded: true,
    error: null,
    children: <div>Content</div>,
  },
};

export const WithError: Story = {
  args: {
    loading: false,
    loaded: false,
    error: new Error("Something went wrong"),
    children: <div>Content</div>,
  },
};
