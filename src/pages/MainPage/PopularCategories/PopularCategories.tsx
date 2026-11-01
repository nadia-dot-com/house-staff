import classes from "@/pages/MainPage/PopularCategories/PopularCategories.module.scss";
import { PopularCategory } from "@/pages/MainPage/PopularCategories/PopularCategory/PopularCategory";
import { useCategories } from "@/hooks/categories/useCategories";
import { DataLoader } from "@/components/DataLoader/DataLoader";

export function PopularCategories() {
  const { data: categories, isLoading, error } = useCategories();

  return (
    <DataLoader loading={isLoading} loaded={!!categories} error={error}>
      <section className={classes.categoriesWrapper}>
        <div className={classes.popular}>Popular categories</div>
        <ul className={classes.categories}>
          {(categories || []).map((category, index) => (
            <PopularCategory key={index} category={category} />
          ))}
        </ul>
      </section>
    </DataLoader>
  );
}
