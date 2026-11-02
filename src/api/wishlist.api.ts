import { WishlistProductDTO } from "@/types/api/wishlist";
import { API_URL } from "@/api/config";
import { handleResponse } from "@/api/handleResponse";

export const fetchWishlist = async (
  token: string,
): Promise<WishlistProductDTO[]> => {
  const res = await fetch(`${API_URL}/user/wishlist`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return handleResponse<WishlistProductDTO[]>(
    res,
    "Failed to fetch wishlist. An unexpected Error was received from the server.",
  );
};

export const fetchDeleteFromWiszlist = async (
  productId: string,
  token: string,
): Promise<void> => {
  const res = await fetch(`${API_URL}/user/wishlist/remove-product`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId }),
  });

  return handleResponse<void>(
    res,
    "Failed to remove product from wishlist. An unexpected Error was received from the server.",
  );
};

export const addToWishlist = async (
  productsIds: string[],
  token: string,
): Promise<void> => {
  const res = await fetch(`${API_URL}/user/wishlist/add-products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productsIds }),
  });

  return handleResponse<void>(
    res,
    "Failed to add product to wishlist. An unexpected Error was received from the server.",
  );
};
