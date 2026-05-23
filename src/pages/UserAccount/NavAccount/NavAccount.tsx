import classes from "./NavAccount.module.scss";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import { ROUTES } from "@/config/routes/Routes";
import { useUserContext } from "@/context/UserContext";
import { Logout } from "./Logout/Logout";

export function NavAccount() {
  const { logout } = useUserContext();

  return (
    <aside>
      <ul className={classes.nav}>
        <li>
          <StyledLink to={ROUTES.profile}>My Profile </StyledLink>
        </li>
        <li>
          <StyledLink to={ROUTES.shoppingCart}>Shopping Cart</StyledLink>
        </li>
        <li>
          <StyledLink to={ROUTES.myOrders}>My Orders</StyledLink>
        </li>
        <li>
          <StyledLink to={ROUTES.myWishlist}>My Wishlist</StyledLink>
        </li>
        <li>
          <Logout onClick={logout} />
        </li>
      </ul>
    </aside>
  );
}
