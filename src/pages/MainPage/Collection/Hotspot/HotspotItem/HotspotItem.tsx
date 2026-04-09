import classes from "./HotspotItem.module.scss";
import { Product } from "@/types/api/product";
import { Price } from "@/components/Price/Price";
import { motion } from "motion/react";
import { useShoppingNavigation } from "@/hooks/useShoppingNavigation";

export function HotspotItem({ item }: { item: Product }) {
  const { navigateToCategory } = useShoppingNavigation();

  return (
    <motion.div
      className={classes.hotspotItem}
      onClick={() => navigateToCategory(item.categoryName, item.name)}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <img src={item.imagesUrls[0]} alt={item.name} className={classes.img} />
      <div className={classes.text}>
        <h2 className={classes.title}>{item.name}</h2>
        <Price price={item.price} discount={item.discount} />
      </div>
      <button className={classes.button} aria-label="View product details">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M8 4l8 8-8 8" />
        </svg>
      </button>
    </motion.div>
  );
}
