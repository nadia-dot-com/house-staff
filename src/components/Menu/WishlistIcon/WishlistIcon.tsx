import classes from "./WishlistIcon.module.scss";
import { IoIosHeart } from "react-icons/io";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import { ROUTES } from "@/config/routes/Routes";

export function WishlistIcon() {
  return (
    <StyledLink to={ROUTES.guestWishlist} aria-label="View wishlist">
      <IoIosHeart className={classes.wishlistIcon} aria-hidden="true" />
    </StyledLink>
  );
}
