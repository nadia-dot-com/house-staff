import classes from "@/pages/UserAccount/NavAccount/NavAccount.module.scss";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import { useUserContext } from "@/context/UserContext";
import { Logout } from "@/pages/UserAccount/NavAccount/Logout/Logout";
import { userLinks } from "@/config/navigation/userLinks";

export function NavAccount() {
  const { logout } = useUserContext();

  return (
    <nav aria-label="User account navigation">
      <ul className={classes.nav}>
        {
          userLinks.map(link => (
            <li key={link.to}>
              <StyledLink to={link.to}>{link.label}</StyledLink>
            </li>
          ))
        }

        <li key="logout">        
          <Logout onClick={logout} />
        </li>
      </ul>
    </nav>
  );
}
