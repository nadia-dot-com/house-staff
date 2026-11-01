import classes from "@/components/StyledLink/StyledLink.module.scss";
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router";
import { cn } from "@/utils/cn";

export type LinkProps = NavLinkProps & {
  children: ReactNode;
};

export function StyledLink({ children, ...rest }: LinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(classes.link, isActive && classes.activeLink)
      }
      {...rest}
    >
      {children}
    </NavLink>
  );
}
