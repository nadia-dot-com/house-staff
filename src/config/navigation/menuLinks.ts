import { ROUTES } from "../routes/Routes";

type MenuLinksProps = {
  to: string;
  label: string;
};

export const menuLinks: MenuLinksProps[] = [
  { to: ROUTES.home + ROUTES.mainLayout, label: "Home" },
  { to: ROUTES.contact, label: "Contact" },
  { to: ROUTES.products, label: "Products" },
];
