import { ShopLink } from "@/components/ShopLink/ShopLink";
import classes from "./PopularCategory.module.scss";
import { useShoppingNavigation } from "@/hooks/useShoppingNavigation";
import { Category } from "@/types/api/category";

export function PopularCategory({ category }: { category: Category }) {
  const { navigateToCategory } = useShoppingNavigation();

  return (
    <li className={classes.categoryItem}>
      <ShopLink category={category.name}>
        <img
          src={category.imageUrl}
          alt={category.name}
          className={classes.img}
          width="284"
          height="350"
        />
        <span
          className={classes.title}
          onClick={() => navigateToCategory(category.name)}
        >
          {category.name}
        </span>
      </ShopLink>
    </li>
  );
}
