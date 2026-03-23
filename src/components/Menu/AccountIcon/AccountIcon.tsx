import { RiAccountCircleFill } from "react-icons/ri";
import { useUserContext } from "@/context/UserContext";
import { cn } from "@/utils/cn";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/Routes";
import classes from "./AccountIcon.module.css";

export function AccountIcon() {
  const { user, isLoginModalOpen, toggleModalOpen } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();

    if (!user) {
      toggleModalOpen();
    } else {
      navigate(ROUTES.userAccount);
    }
  };

  const isAccountPage = location.pathname.includes(ROUTES.userAccount);

  return (
    <RiAccountCircleFill
      className={cn(
        classes.accountIcon,
        (isLoginModalOpen || isAccountPage) && classes.active,
      )}
      onClick={handleClick}
      aria-label={user ? "My Account" : "Login"}
    />
  );
}
