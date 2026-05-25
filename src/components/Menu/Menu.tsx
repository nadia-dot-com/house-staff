import classes from "./Menu.module.scss";
import { StyledLink } from "../StyledLink/StyledLink";
import { ShoppingCartIcon } from "./ShoppingCartIcon/ShoppingCartIcon";
import { AccountIcon } from "./AccountIcon/AccountIcon";
import { WishlistIcon } from "./WishlistIcon/WishlistIcon";
import { useEffect } from "react";
import { useCartUiContext } from "@/context/CartUIContext";
import { AnimatePresence, motion } from "motion/react";
import { useToggle } from "@/hooks/useToggle";
import { menuLinks } from "@/config/navigation/menuLinks";

export function Menu() {
  const [isMenuOpen, toggleMenuOpen] = useToggle(false);
  const { isCartOpen } = useCartUiContext();

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
        {menuLinks.map((menu) => (
          <li key={menu.label}>
            <StyledLink to={menu.to}>{menu.label}</StyledLink>
          </li>
        ))}

        <li key="account" className={classes.navIcon}>
          <AccountIcon />
        </li>

        <li key="wishlist" className={classes.navIcon}>
          <WishlistIcon />
        </li>

        <li key="cart" className={classes.navIcon}>
          <ShoppingCartIcon active={isCartOpen} />
        </li>
      </ul>

      <ul className={classes.mobileMenu}>
        <li key="account" className={classes.navIcon}>
          <AccountIcon />
        </li>

        <li key="wishlist" className={classes.navIcon}>
          <WishlistIcon />
        </li>

        <li key="cart" className={classes.navIcon}>
          <ShoppingCartIcon active={isCartOpen} />
        </li>

        <li>
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className={classes.burgerIcon}
            onClick={toggleMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.svg
                  aria-hidden="true"
                  key="close"
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 30, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className={classes.icon}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  aria-hidden="true"
                  key="burger"
                  initial={{ rotate: 30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -30, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className={classes.icon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </li>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.ul
              key="login-modal"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
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
      </ul>
    </nav>
  );
}
