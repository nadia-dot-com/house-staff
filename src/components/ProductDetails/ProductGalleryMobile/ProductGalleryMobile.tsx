import classes from "@/components/ProductDetails/ProductGalleryMobile/ProductGalleryMobile.module.scss";
import { useRef, useState } from "react";
import { SaleLabel } from "@/components/SaleLabel/SaleLabel";
import { NewProductLabel } from "@/components/NewProductLabel/NewProductLabel";
import { cn } from "@/utils/cn";

export function ProductGalleryMobile({
  imagesUrls,
  name,
  isOnSale,
  isNew,
}: {
  imagesUrls: string[];
  name: string;
  isOnSale: boolean;
  isNew: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const width = el.clientWidth;
    const scrollLeft = el.scrollLeft;

    const index = Math.round(scrollLeft / width);
    setActiveIndex((prev) => (prev !== index ? index : prev));
  };

  return (
    <div className={classes.mobileContainer}>
      <div className={classes.labels}>
        {isOnSale && <SaleLabel />}
        {isNew && <NewProductLabel />}
      </div>
      <div
        className={classes.mobileImgs}
        ref={containerRef}
        onScroll={handleScroll}
      >
        {imagesUrls.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${name} ${i}`}
            className={classes.mobileImg}
          />
        ))}
      </div>

      {imagesUrls.length > 1 && (
        <div className={classes.dots}>
          {imagesUrls.map((_, i) => (
            <div
              key={i}
              className={cn(classes.dot, activeIndex === i && classes.active)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
