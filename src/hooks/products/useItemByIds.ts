import { useMemo } from "react";
import { useProducts } from "./useProducts";
import { keyBy } from "lodash";

export function useItemsByIds(ids: string[]) {
  const { data: products = [], error, isLoading } = useProducts();

  const productsMap = useMemo(() => keyBy(products, "id"), [products]);

  const filteredProducts = useMemo(
    () => ids.map((id) => productsMap[id]),
    [ids, products],
  );

  return { productsMap, filteredProducts, error, isLoading };
}
