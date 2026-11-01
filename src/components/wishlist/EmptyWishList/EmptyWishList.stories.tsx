import { MemoryRouter } from "react-router-dom";
import { WishlistProvider } from "@/context/WishlistContext";
import { EmptyWishList } from "@/components/wishlist/EmptyWishList/EmptyWishList";
import { Meta, StoryObj } from "@storybook/react-vite";
import { CategoryProvider } from "@/context/CategoryContext";

const meta: Meta<typeof EmptyWishList> = {
  component: EmptyWishList,
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

type Story = StoryObj<typeof EmptyWishList>;

export const Default: Story = {};
