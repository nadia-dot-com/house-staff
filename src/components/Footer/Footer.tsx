import classes from "@/components/Footer/Footer.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { cn } from "@/utils/cn";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import { ROUTES } from "@/config/routes/Routes";
import {
  SHOP_ADDRESS,
  SHOP_EMAIL,
  SHOP_GOOGLE_MAPS_LOCATION_URL,
  SHOP_PHONE,
  SHOP_PHONE_TEL,
  SHOP_SOCIALS,
  SHOP_WORKING_HOURS,
} from "@/config";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <ul className={classes.info}>
        <li className={classes.infoItem}>
          <FaPhoneAlt />
          <a href={`tel:${SHOP_PHONE_TEL}`}>{SHOP_PHONE}</a>
        </li>
        <li className={classes.infoItem}>
          <MdOutlineAlternateEmail />
          <a href="mailto:housestaffcontact@gmail.com">{SHOP_EMAIL}</a>
        </li>
        <li className={cn(classes.infoItem, classes.time)}>
          <IoIosTime />
          {SHOP_WORKING_HOURS}
        </li>
        <li className={classes.infoItem}>
          <MdPlace />
          <a
            href={SHOP_GOOGLE_MAPS_LOCATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SHOP_ADDRESS}
          </a>
        </li>
      </ul>
      <div className={classes.socials}>
        <a
          className={classes.socialLink}
          href={SHOP_SOCIALS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaSquareFacebook />
        </a>
        <a
          className={classes.socialLink}
          href={SHOP_SOCIALS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaSquareInstagram />
        </a>
      </div>
      <div className={classes.contact}>
        <StyledLink to={ROUTES.contact}>
          More Contact
          <HiOutlineExternalLink />
        </StyledLink>
      </div>
      <div className={classes.rights}>All rights reserved &copy;</div>
    </footer>
  );
}
