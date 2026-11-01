import { createContext, ReactNode, useMemo, useState } from "react";
import { CategoryContextValue } from "@/types/categoryTypes";
import { categoriesGroups } from "@/data/categories";
import { createContextHook } from "@/hooks/createContextHook";

// eslint-disable-next-line react-refresh/only-export-components -- context + provider + hook are colocated by design
export const CategoryContext = createContext<CategoryContextValue | null>(null);

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoriesGroups.all,
  );

  const value = useMemo(
    () => ({
      selectedCategory,
      setSelectedCategory,
    }),
    [selectedCategory, setSelectedCategory],
  );

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- context + provider + hook are colocated by design
export const useCategoryContext = createContextHook(
  CategoryContext,
  CategoryProvider,
);
