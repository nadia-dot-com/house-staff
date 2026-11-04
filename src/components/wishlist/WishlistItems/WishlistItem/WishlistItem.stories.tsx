import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Meta, StoryObj } from "@storybook/react-vite";
import { WishlistItem } from "@/components/wishlist/WishlistItems/WishlistItem/WishlistItem";
import { Product } from "@/types/api/product";
import { WishlistProvider } from "@/context/WishlistContext";
import { UserProvider } from "@/context/UserContext";
import { CartProvider } from "@/context/CartContext";
import { queryClient } from "@/query/queryClient";

const meta: Meta<typeof WishlistItem> = {
  component: WishlistItem,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <UserProvider>
            <CartProvider>
              <WishlistProvider>
                <Story />
              </WishlistProvider>
            </CartProvider>
          </UserProvider>
        </MemoryRouter>
      </QueryClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof WishlistItem>;

const mockProduct: Product = {
  id: "1",
  name: "Table",
  categoryId: "cat-1",
  shortDescription: "comfortable wooden table",
  fullDescription: "A very comfortable wooden table for home use",
  price: 400,
  discount: 0,
  releaseDate: "2025-11-09T00:00:00.000Z",
  imagesUrls: ["https://placehold.co/425x509/E0E0E0/808080?text=Product+Image"],
  categoryName: "Furniture",
  collectionId: null,
  collectionName: null,
  stockQuantity: 100,
};

export const Default: Story = {
  args: {
    item: mockProduct,
  },
};

export const Disabled: Story = {
  args: {
    item: {
      ...mockProduct,
      stockQuantity: 0,
    },
  },
};
