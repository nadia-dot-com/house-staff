import { Meta, StoryObj } from "@storybook/react";
import { WishlistItemVisual } from "./WishlistItem";
import { Product } from "@/types/api/product";
import { WishlistProvider } from "@/context/WishlistContext";

const meta: Meta<typeof WishlistItemVisual> = {
  component: WishlistItemVisual,
  argTypes: {
    toggleLike: () => {},
    navigate: () => {},
    addToCart: () => {},
  },
  decorators: (Story) => (
    <WishlistProvider>
      <Story />
    </WishlistProvider>
  ),
};

export default meta;

type Story = StoryObj<typeof WishlistItemVisual>;

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
    isLoading: false,
  },
};

export const Disabled: Story = {
  args: {
    item: {
      ...mockProduct,
      stockQuantity: 0,
    },
    isLoading: false,
  },
};
