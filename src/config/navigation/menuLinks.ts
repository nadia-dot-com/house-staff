import { ROUTES } from "../routes/Routes";
import { MenuLinksProps } from "../types/type";

export const menuLinks: MenuLinksProps[] = [
  { to: ROUTES.home + ROUTES.mainLayout, label: "Home" },
  { to: ROUTES.contact, label: "Contact" },
  { to: ROUTES.products, label: "Products" },
];
