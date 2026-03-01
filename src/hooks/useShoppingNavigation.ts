import { useNavigate } from "react-router-dom";
import { ROUTES } from "../config/Routes";
import { useCategoryContext } from "../context/CategoryContext";
import { slugity } from "../utils/slugify";
import { compact } from "lodash";

export function useShoppingNavigation() {
  const { setSelectedCategory } = useCategoryContext();
  const navigate = useNavigate();

  const navigateToCategory = (category: string, productId?: string) => {
    const toUrl = compact([
      `/${ROUTES.products}`,
      slugity(category),
      productId && slugity(productId),
    ]).join("/");
    setSelectedCategory(category);
    navigate(toUrl);
  };

  return { navigateToCategory };
}
