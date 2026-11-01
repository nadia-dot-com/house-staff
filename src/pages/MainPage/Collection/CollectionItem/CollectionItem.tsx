import classes from "@/pages/MainPage/Collection/CollectionItem/CollectionItem.module.scss";
import { useProducts } from "@/hooks/products/useProducts";
import { Collection, HotSpotProps } from "@/types/api/collection";
import { Hotspot } from "@/pages/MainPage/Collection/Hotspot/Hotspot";

export function CollectionItem({
  collectionItem,
}: {
  collectionItem: Collection;
}) {
  const { data: products = [], isLoading } = useProducts();

  if (isLoading || !products) return null;

  const hotspots: HotSpotProps[] = collectionItem.presentation.hotspots ?? [];

  return (
    <li className={classes.collectionItem}>
      <div className={classes.imageWrapper}>
        <img
          className={classes.img}
          src={collectionItem.presentation.imageUrl}
          alt=""
          width="1100"
          height="613"
        />
        <div className={classes.title}>{collectionItem.name}</div>
        {hotspots.map((spot) => (
          <Hotspot
            top={spot.top}
            left={spot.left}
            productId={spot.productId}
            products={products}
            key={spot.productId}
          />
        ))}
      </div>
    </li>
  );
}