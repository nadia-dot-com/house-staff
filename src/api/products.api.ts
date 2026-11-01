import { QueryFunctionContext } from "@tanstack/react-query";
import { Product, ProductsInfiniteResponse } from "@/types/api/product";
import { API_URL } from "@/api/config";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}/products`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ??
        "Failed to fetch products. An unexpected Error was received from the server.",
    );
  }

  return data;
};

export const fetchInfiniteProducts = async ({
  pageParam = 0,
}: QueryFunctionContext): Promise<ProductsInfiniteResponse> => {
  const res = await fetch(`${API_URL}/products?page=${pageParam}`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ??
        "Failed to fetch products. An unexpected Error was received from the server.",
    );
  }

  return data;
};
