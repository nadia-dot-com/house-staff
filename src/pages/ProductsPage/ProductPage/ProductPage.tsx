import classes from "@/pages/ProductsPage/ProductPage/ProductPage.module.scss";
import { useParams } from "react-router-dom";
import { ProductDetails } from "@/components/ProductDetails/ProductDetails.tsx";
import { slugify } from "@/utils/slugify.ts";
import { useProducts } from "@/hooks/products/useProducts.ts";
import { DataLoader } from "@/components/DataLoader/DataLoader.tsx";
import { AppError } from "@/errors/index.ts";

export default function ProductPage() {
  const { itemId } = useParams();
  const { data: products, isLoading, error } = useProducts();
  console.log(products)

  const name = itemId?.toLowerCase() ?? "";

  const product = products?.find((i) => slugify(i.name) === name);

  return (
    <>
      <title>{product ? `${product.name} | House Staff` : "House Staff"}</title>
      {product?.shortDescription && (
        <meta name="description" content={product.shortDescription} />
      )}

      <DataLoader
        loading={isLoading}
        loaded={!!product}
        error={product ? error : new AppError(`Product '${name}' does not exist`)}
      >
        <div className={classes.productPage}>
          {product && <ProductDetails product={product} />}
        </div>
      </DataLoader>
    </>
  );
}
