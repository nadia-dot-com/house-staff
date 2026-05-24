import { ROUTES } from "../routes/Routes";
import { MenuLinksProps } from "../types/type";

export const userLinks: MenuLinksProps[] = [
  { to: ROUTES.profile, label: "My Profile" },
  { to: ROUTES.shoppingCart, label: "Shopping Cart" },
  { to: ROUTES.myOrders, label: "My Orders" },
  { to: ROUTES.myWishlist, label: "My Wishlist" },
];
