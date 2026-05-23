import { ROUTES } from "@/config/routes/Routes";
import { useCategoryContext } from "@/context/CategoryContext";
import { slugify } from "@/utils/slugify";
import { compact } from "lodash";
import { Link } from "react-router-dom";

export function ShopLink({
  category,
  name,
  children,
  className,
  onClick,
}: {
  category: string;
  name?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { setSelectedCategory } = useCategoryContext();

  const toUrl = compact([
    `/${ROUTES.products}`,
    slugify(category),
    name && slugify(name),
  ]).join("/");

  return (
    <Link
      to={toUrl}
      className={className}
      onClick={() => {
        (setSelectedCategory(category), onClick?.());
      }}
    >
      {children}
    </Link>
  );
}
