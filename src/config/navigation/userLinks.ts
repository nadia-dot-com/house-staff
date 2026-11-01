import { ROUTES } from "@/config/routes/Routes";
import { MenuLinksProps } from "@/config/types/type";

export const userLinks: MenuLinksProps[] = [
  { to: ROUTES.profile, label: "My Profile" },
  { to: ROUTES.shoppingCart, label: "Shopping Cart" },
  { to: ROUTES.myOrders, label: "My Orders" },
  { to: ROUTES.myWishlist, label: "My Wishlist" },
];
