import classes from "./Menu.module.scss";
import { StyledLink } from "../StyledLink/StyledLink";
import { ShoppingCartIcon } from "./ShoppingCartIcon/ShoppingCartIcon";
import { ROUTES } from "@/config/Routes";
import { AccountIcon } from "./AccountIcon/AccountIcon";
import { WishlistIcon } from "./WishlistIcon/WishlistIcon";
import { useEffect } from "react";
import { useCartUiContext } from "@/context/CartUIContext";
import { AnimatePresence, motion } from "motion/react";
import { useToggle } from "@/hooks/useToggle";

type MenuLinksProps = {
  to: string;
  label: string;
};

const menuLinks: MenuLinksProps[] = [
  { to: ROUTES.home + ROUTES.mainLayout, label: "Home" },
  { to: ROUTES.contact, label: "Contact" },
  { to: ROUTES.products, label: "Products" },
];

export function Menu() {
  const [isMenuOpen, toggleMenuOpen] = useToggle(false);
  const { isCartOpen} = useCartUiContext();

  useEffect(() => {
    const closeMenuOnScroll = () => {
      if (isMenuOpen) toggleMenuOpen();
    };

    window.addEventListener("scroll", closeMenuOnScroll);
    return () => window.removeEventListener("scroll", closeMenuOnScroll);
  }, [isMenuOpen]);

  return (
    <nav className={classes.nav}>
      <ul className={classes.desktopMenu}>
        {menuLinks.map((menu, i) => (
          <li key={i}>
            <StyledLink to={menu.to}>{menu.label}</StyledLink>
          </li>
        ))}

        <li className={classes.navIcons}>
          <AccountIcon />

          <StyledLink to={ROUTES.guestWishlist}>
            <WishlistIcon />
          </StyledLink>

          <ShoppingCartIcon active={isCartOpen} />
        </li>
      </ul>

      <div className={classes.mobileMenu}>
        <div className={classes.navIcons}>
          <AccountIcon />

          <StyledLink to={ROUTES.guestWishlist}>
            <WishlistIcon />
          </StyledLink>

          <ShoppingCartIcon active={isCartOpen} />
        </div>

        <div className={classes.burgerMenu}>
          <div className={classes.burgerIcon} onClick={toggleMenuOpen}>
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 30, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className={classes.iconOpen}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3.8L3.8 4.5 7.3 8l-3.5 3.5.7.7L8 8.7l3.5 3.5.7-.7L8.7 8l3.5-3.5-.7-.7L8 7.3 4.5 3.8z"
                    fill="currentColor"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="burger"
                  initial={{ rotate: 30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -30, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut"}}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {isMenuOpen? (
              <motion.ul
                key="login-modal"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{duration: 0.3, ease: "easeInOut"}}
                className={classes.burgerList}
              >
                {menuLinks.map((menu, i) => (
                  <li key={i}>
                    <StyledLink to={menu.to}>{menu.label}</StyledLink>
                  </li>
                ))}
              </motion.ul>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
