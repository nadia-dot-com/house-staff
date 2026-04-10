import classes from "./ProductNavView.module.scss";
import { categoriesGroups } from "@/data/categories";
import { useHover } from "@/hooks/useHover";
import { useShoppingNavigation } from "@/hooks/useShoppingNavigation";
import { Category } from "@/types/api/category";
import { Collection } from "@/types/api/collection";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function ProductNavView({
  categories = [],
  collections = [],
}: {
  categories?: Category[];
  collections?: Collection[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { navigateToCategory } = useShoppingNavigation();
  const hoverRef = useHover(
    () => setIsOpen(true),
    () => setIsOpen(false),
  );

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

      <ul className={classes.mobileCategories} ref={hoverRef}>
        <li className={classes.categoryButton} key="menuButton">
          Categories
        </li>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={classes.mobileDropdownList}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              {Array.from(categoriesNav).map((category) => (
                <li
                  className={cn(
                    classes.mobileCategory,
                    category === categoriesGroups.sale && classes.saleCategory,
                  )}
                  key={category}
                  onClick={() => {
                    navigateToCategory(category);
                    setIsOpen(false);
                  }}
                >
                  {category}
                </li>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </aside>
  );
}
