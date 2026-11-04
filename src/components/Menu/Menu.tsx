import classes from "@/components/Menu/Menu.module.scss";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import { ShoppingCartIcon } from "@/components/Menu/ShoppingCartIcon/ShoppingCartIcon";
import { AccountIcon } from "@/components/Menu/AccountIcon/AccountIcon";
import { WishlistIcon } from "@/components/Menu/WishlistIcon/WishlistIcon";
import { useEffect } from "react";
import { useCartUiContext } from "@/context/CartUIContext";
import { AnimatePresence, motion } from "motion/react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useToggle } from "@/hooks/useToggle";
import { menuLinks } from "@/config/navigation/menuLinks";

const MotionHamburgerIcon = motion.create(RxHamburgerMenu);
const MotionCloseIcon = motion.create(RxCross2);

export function Menu() {
  const [isMenuOpen, toggleMenuOpen] = useToggle(false);
  const { isCartOpen } = useCartUiContext();

  useEffect(() => {
    const closeMenuOnScroll = () => {
      if (isMenuOpen) toggleMenuOpen();
    };

    window.addEventListener("scroll", closeMenuOnScroll);
    return () => window.removeEventListener("scroll", closeMenuOnScroll);
  }, [isMenuOpen, toggleMenuOpen]);

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
                <MotionCloseIcon
                  aria-hidden="true"
                  key="close"
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 30, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className={classes.icon}
                />
              ) : (
                <MotionHamburgerIcon
                  aria-hidden="true"
                  key="burger"
                  initial={{ rotate: 30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -30, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className={classes.icon}
                />
              )}
            </AnimatePresence>
          </button>

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
        </li>
      </ul>
    </nav>
  );
}
