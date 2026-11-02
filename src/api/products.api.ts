import { QueryFunctionContext } from "@tanstack/react-query";
import { Product, ProductsInfiniteResponse } from "@/types/api/product";
import { API_URL } from "@/api/config";
import { handleResponse } from "@/api/handleResponse";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}/products`);

  return handleResponse<Product[]>(
    res,
    "Failed to fetch products. An unexpected Error was received from the server.",
  );
};

export const fetchInfiniteProducts = async ({
  pageParam = 0,
}: QueryFunctionContext): Promise<ProductsInfiniteResponse> => {
  const res = await fetch(`${API_URL}/products?page=${pageParam}`);

  return handleResponse<ProductsInfiniteResponse>(
    res,
    "Failed to fetch products. An unexpected Error was received from the server.",
  );
};
