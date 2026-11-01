import { Category } from "@/types/api/category";
import { API_URL } from "@/api/config";

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${API_URL}/categories`);

  const data = await res.json();
  
  if (!res.ok) {
    throw new Error(
      data?.message ??
      "Failed to fetch categories. An unexpected Error was received from the server.",
    );
  }
  
  return data;
};
