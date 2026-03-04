import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/Routes";
import { toast } from "react-toastify";
import { GUEST_WISHLIST_KEY, TOKEN } from "../../data/locatStorageKey";
import { useAddToWishlist } from "../../hooks/wishlist/useAddToWishlist";
import { useUserContext } from "../../context/UserContext";
import { useWishlistContext } from "../../context/WishlistContext";

import classes from "./GoogleCallback.module.css";

export function GoogleCallback() {
  const navigate = useNavigate();
  const merge = useAddToWishlist();
  const { cleanGuestWishlist } = useWishlistContext();
  const { updateToken } = useUserContext();

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get(TOKEN); 

  if (!token) {
    toast.error("Login failed");
    navigate("/", { replace: true });
    return;
  }

  localStorage.setItem(TOKEN, token);
  
  updateToken(token);

  const localWishlist = JSON.parse(
    localStorage.getItem(GUEST_WISHLIST_KEY) ?? "[]"
  );

  const handleRedirect = () => {
    setTimeout(() => {
      navigate(`/${ROUTES.userAccount}`, { replace: true });
    }, 50); 
  };

  if (localWishlist.length > 0) {
    merge.mutate(localWishlist, {
      onSettled: () => {
        cleanGuestWishlist();
        handleRedirect();
      },
    });
  } else {
    handleRedirect();
  }
}, [navigate, updateToken, cleanGuestWishlist, merge]);
  return <div className={classes.signing}>Signing you in...</div>;
}
