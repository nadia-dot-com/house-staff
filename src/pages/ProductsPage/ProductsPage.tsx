import classes from "@/pages/ProductsPage/ProductsPage.module.scss";
import { useLocation, useOutlet, useParams } from "react-router-dom";
import { Products } from "@/components/products/Products/Products";
import { ProductNav } from "@/components/ProductNav/ProductNav";
import { categoriesGroups } from "@/data/categories";
import { DataLoader } from "@/components/DataLoader/DataLoader";
import { cn } from "@/utils/cn";
import { useCategoryContext } from "@/context/CategoryContext";
import { useFilteredProducts } from "@/hooks/products/useFilteredProducts";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/ErrorFallback/ErrorFallback";
import { AnimatePresence } from "motion/react";
import { cloneElement } from "react";

export default function ProductsPage() {
  const { itemId } = useParams();
  const { selectedCategory } = useCategoryContext();
  const normalizedCategory = selectedCategory ?? categoriesGroups.all;
  const location = useLocation();
  const outlet = useOutlet();

  const { products, isLoading, error } =
    useFilteredProducts(normalizedCategory);

  return (
    <div className={classes.productsPage}>
      <ProductNav />

      <section>
        <AnimatePresence mode="wait">
          {outlet && cloneElement(outlet, { key: location.pathname })}
        </AnimatePresence>
      </section>

      <DataLoader loading={isLoading} loaded={!!products.length} error={error}>
        <section
          className={cn(
            classes.productsContainer,
            itemId && classes.productPageOpen,
          )}
        >
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Products products={products} />
          </ErrorBoundary>
        </section>
      </DataLoader>
    </div>
  );
}
