import classes from "@/pages/MainPage/Collection/Hotspot/Hotspot.module.scss";
import { useToggle } from "@/hooks/useToggle";
import { HotspotItem } from "@/pages/MainPage/Collection/Hotspot/HotspotItem/HotspotItem";
import { HotspotButton } from "@/pages/MainPage/Collection/Hotspot/HotspotButton/HotspotButton";
import { ProductNotFound } from "@/pages/MainPage/Collection/Hotspot/HotspotItem/ProductNotFound";
import { Product } from "@/types/api/product";
import { AnimatePresence } from "motion/react";

export function Hotspot({
  top,
  left,
  productId,
  products,
}: {
  top: string;
  left: string;
  productId: string;
  products: Product[];
}) {
  const [visible, toggleVisible] = useToggle(false);

  const product =
    products.find((p) => String(p.id) === String(productId)) ?? null;

  return (
    <div
      className={classes.hotspotWrapper}
      style={{ top, left, position: "absolute" }}
    >
      <HotspotButton onClick={toggleVisible} />
      <AnimatePresence>
        {visible &&
          (product ? <HotspotItem item={product} /> : <ProductNotFound />)}
      </AnimatePresence>
    </div>
  );
}
