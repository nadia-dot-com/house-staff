import classes from "./WishlistButton.module.css";
import Lottie from "lottie-react";
import likeLoading from "../../../animations/insider-loading.json";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { memo } from "react";
import { cn } from "../../../utils/cn";

type WishlistButton = {
  isLoading: boolean;
  liked: boolean;
  toggleLike: () => void;
  className?: string;
};

export const WishlistButton = memo(
  ({ isLoading, liked, toggleLike, className }: WishlistButton) => {
    return (
      <div className={cn(classes.wishlistContainer, className)}>
        {isLoading ? (
          <Lottie
            animationData={likeLoading}
            style={{
              width: 80,
              height: 80,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0.8,
            }}
          />
        ) : liked ? (
          <IoIosHeart className={classes.icon} onClick={toggleLike} />
        ) : (
          <IoIosHeartEmpty className={classes.icon} onClick={toggleLike} />
        )}
      </div>
    );
  },
);
