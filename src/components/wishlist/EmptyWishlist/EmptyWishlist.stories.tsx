import { MemoryRouter } from "react-router-dom";
import { WishlistProvider } from "@/context/WishlistContext";
import { EmptyWishlist } from "@/components/wishlist/EmptyWishlist/EmptyWishlist";
import { Meta, StoryObj } from "@storybook/react-vite";
import { CategoryProvider } from "@/context/CategoryContext";

const meta: Meta<typeof EmptyWishlist> = {
  component: EmptyWishlist,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <CategoryProvider>
          <WishlistProvider>
            <Story />
          </WishlistProvider>
        </CategoryProvider>
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof EmptyWishlist>;

export const Default: Story = {};
