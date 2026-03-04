import { useNavigate } from "react-router-dom";
import { ROUTES } from "../config/Routes";
import { useCategoryContext } from "../context/CategoryContext";
import { slugify } from "../utils/slugify";
import { compact } from "lodash";
import { useCallback } from "react";

export function useShoppingNavigation() {
  const { setSelectedCategory } = useCategoryContext();
  const navigate = useNavigate();

  const navigateToCategory = useCallback((category: string, productId?: string) => {
    const toUrl = compact([
      `/${ROUTES.products}`,
      slugify(category),
      productId && slugify(productId),
    ]).join("/");
    setSelectedCategory(category);
    navigate(toUrl);
  }, [setSelectedCategory, navigate]);

  return { navigateToCategory };
}
