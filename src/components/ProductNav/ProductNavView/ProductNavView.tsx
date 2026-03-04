import { categoriesGroups } from "../../../data/categories";
import { useShoppingNavigation } from "../../../hooks/useShoppingNavigation";
import { useToggle } from "../../../hooks/useToggle";
import { Category } from "../../../types/api/category";
import { Collection } from "../../../types/api/collection";
import { cn } from "../../../utils/cn";

import classes from "./ProductNavView.module.css";

export function ProductNavView({
  categories = [],
  collections = [],
}: {
  categories?: Category[];
  collections?: Collection[];
}) {
  const [isOpen, setIsOpen] = useToggle(false);
  const { navigateToCategory } = useShoppingNavigation();

  const categoriesNav = new Set([
    categoriesGroups.all,
    categoriesGroups.sale,
    ...(categories || []).map((i) => i.name),
    ...(collections || []).map((i) => i.name),
  ]);

  return (
    <aside>
      <ul className={classes.desktopCategories}>
        {Array.from(categoriesNav).map((category) => (
          <li
            className={cn(
              classes.category,
              category === categoriesGroups.sale && classes.saleCategory,
            )}
            key={category}
            onClick={() => navigateToCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      <ul className={classes.mobileCategories}>
        <li className={classes.categoryButton} onClick={setIsOpen}>
          Categories
          {!isOpen ? (
            <svg
              className={classes.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" />
            </svg>
          ) : (
            <svg
              className={classes.icon}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 3.8L3.8 4.5 7.3 8l-3.5 3.5.7.7L8 8.7l3.5 3.5.7-.7L8.7 8l3.5-3.5-.7-.7L8 7.3 4.5 3.8z"
                fill="currentColor"
              />
            </svg>
          )}
        </li>
          {isOpen && Array.from(categoriesNav).map((category, index) => (
            <li
              className={cn(
                classes.mobileCategory,
                category === categoriesGroups.sale && classes.saleCategory,
              )}
              key={index}
              onClick={() => navigateToCategory(category)}
            >
              {category}
            </li>
          ))}
      </ul>
    </aside>
  );
}
