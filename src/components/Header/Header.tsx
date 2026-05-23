import classes from "./Header.module.scss";
import { Menu } from "../Menu/Menu";
import { StyledLink } from "../StyledLink/StyledLink";
import { ROUTES } from "@/config/routes/Routes";
import { useScrollUp } from "@/hooks/useScrollUp";
import { cn } from "@/utils/cn";

export default function Header() {
  const { isScrollingUp } = useScrollUp();

  return (
    <header
      className={cn(
        classes.header,
        isScrollingUp ? classes.headerVisible : classes.headerHidden,
      )}
    >
      <StyledLink
        to={`${ROUTES.home}${ROUTES.mainLayout}`}
        className={classes.logo}
      >
        House Staff
      </StyledLink>
      <Menu />
    </header>
  );
}
