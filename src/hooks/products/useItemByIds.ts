import { useMemo } from "react";
import { useProducts } from "@/hooks/products/useProducts";
import { keyBy } from "lodash";

export function useItemsByIds(ids: string[]) {
  const { data: products = [], error, isLoading } = useProducts();

  const productsMap = useMemo(() => keyBy(products, "id"), [products]);

  const filteredProducts = ids.map((id) => productsMap[id]).filter(Boolean);

  return { productsMap, filteredProducts, error, isLoading };
}
