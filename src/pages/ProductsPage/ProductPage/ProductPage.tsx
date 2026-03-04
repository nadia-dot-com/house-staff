import { useParams } from 'react-router-dom'
import { ProductDetails } from '../../../components/ProductDetails/ProductDetails.tsx';
import { slugify } from '../../../utils/slugify.ts';
import { useProducts } from '../../../hooks/products/useProducts.ts';
import { DataLoader } from '../../../components/DataLoader/DataLoader.tsx';

import classes from './ProductPage.module.css';
import { AppError } from '../../../errors/index.ts';

export default function ProductPage() {
    const { itemId } = useParams();
    const { data: products, isLoading, error } = useProducts();

    const name = itemId?.toLowerCase() ?? "";

    const product = products?.find((i) => slugify(i.name) === name);

    return (
        <DataLoader
            loading={isLoading}
            loaded={!!product}
            error={product ? error : new AppError(`Product '${name}' does not exist`)}
        >
            <div className={classes.productPage}>
                {product && <ProductDetails product={product} />}
            </div>
        </DataLoader>
    )
}

