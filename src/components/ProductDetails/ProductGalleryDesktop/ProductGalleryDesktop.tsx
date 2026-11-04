import classes from "@/components/ProductDetails/ProductGalleryDesktop/ProductGalleryDesktop.module.scss";
import { useEffect, useState } from "react";
import { SaleLabel } from "@/components/SaleLabel/SaleLabel";
import { NewProductLabel } from "@/components/NewProductLabel/NewProductLabel";

export function ProductGalleryDesktop({
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
  const [mainImg, setMainImg] = useState<string>(imagesUrls[0]);

  useEffect(() => {
    setMainImg(imagesUrls[0]);
  }, [imagesUrls]);

  return (
    <div className={classes.desktopContainer}>
      <div className={classes.labels}>
        {isOnSale && <SaleLabel />}
        {isNew && <NewProductLabel />}
      </div>
      <img
        src={mainImg}
        alt={name}
        className={classes.mainImg}
        width="400"
        height="400"
      />
      <div className={classes.imgContainer}>
        {imagesUrls.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${name} ${i}`}
            className={classes.img}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.code === "Enter" || event.key === " ") setMainImg(src);
            }}
            onClick={() => setMainImg(src)}
          />
        ))}
      </div>
    </div>
  );
}
