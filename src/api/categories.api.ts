import { Category } from "@/types/api/category";
import { API_URL } from "@/api/config";
import { handleResponse } from "@/api/handleResponse";

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${API_URL}/categories`);

  return handleResponse<Category[]>(
    res,
    "Failed to fetch categories. An unexpected Error was received from the server.",
  );
};
