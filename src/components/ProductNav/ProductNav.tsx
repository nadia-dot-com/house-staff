import { useCategories } from "../../hooks/categories/useCategories";
import { useCollections } from "../../hooks/collection/useCollections";
import { ProductNavView } from "./ProductNavView/ProductNavView";

export function ProductNav() {
  const { data: categories } = useCategories();

  const { data: collections } = useCollections();

  return (
    <ProductNavView
      categories={categories ?? []}
      collections={collections ?? []}
    />
  );
}
