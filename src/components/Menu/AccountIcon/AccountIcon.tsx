import classes from "@/components/Menu/AccountIcon/AccountIcon.module.scss";
import { RiAccountCircleFill } from "react-icons/ri";
import { useUserContext } from "@/context/UserContext";
import { cn } from "@/utils/cn";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes/Routes";
import { useCartUiContext } from "@/context/CartUIContext";

export function AccountIcon() {
  const { user, isLoginModalOpen, toggleModalOpen } = useUserContext();
  const { isCartOpen, toggleCartOpen } = useCartUiContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    if (isCartOpen) {
      toggleCartOpen();
    }

    if (!user) {
      toggleModalOpen();
    } else {
      navigate(ROUTES.userAccount);
    }
  };

  const isAccountPage = location.pathname.includes(ROUTES.userAccount);

  return (
    <button onClick={handleClick} aria-label={user ? "My Account" : "Login"}>
      <RiAccountCircleFill
        aria-hidden="true"
        className={cn(
          classes.accountIcon,
          (isLoginModalOpen || isAccountPage) && classes.active,
        )}
      />
    </button>
  );
}
