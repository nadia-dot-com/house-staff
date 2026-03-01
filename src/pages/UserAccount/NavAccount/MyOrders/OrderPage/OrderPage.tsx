import { useParams } from "react-router-dom";
import { Vat } from "../../ShoppingCart/CheckoutReview/CheckoutSections/VatSection/VatSection";
import { TotalPrice } from "../../ShoppingCart/CheckoutReview/CheckoutSections/TotalSection/TotalSection";
import { getDiscountPrice } from "../../../../../utils/product";
import {
  getDiscountSubtotal,
  getSubtotal,
} from "../../../../../utils/getSubtotals";
import { useOrderFromOrders } from "../../../../../hooks/orders/useOrderFromOrders";
import { DataLoader } from "../../../../../components/DataLoader/DataLoader";
import classes from "./OrderPage.module.css";
import { useMemo } from "react";

export function OrderPage() {
  const { orderId } = useParams();
  const { order, isLoading, error } = useOrderFromOrders(orderId);

  const hasDiscount = useMemo(
    () => order?.items.some((el) => el.discount > 0) ?? false,
    [order],
  );

  return (
    <DataLoader loading={isLoading} loaded={!!order} error={error}>
      {order && (
        <div className={classes.wrap}>
          <div>
            <section className={classes.orderListSection}>
              <div className={classes.title}>
                <div>Product</div>
                <div>Total</div>
              </div>

              <ul className={classes.orderList}>
                {order.items.map((product) => (
                  <li className={classes.orderItem} key={product.id}>
                    <p>
                      {product.product.name} x {product.quantity}
                    </p>
                    <div className={classes.price}>
                      {product.discount ? (
                        <p className={classes.discountPrice}>
                          $
                          {(
                            getDiscountPrice(product.price, product.discount) *
                            product.quantity
                          ).toFixed(2)}
                        </p>
                      ) : (
                        <p>
                          ${Number(product.price * product.quantity).toFixed(2)}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className={classes.subtotalSection}>
              Subtotal:
              <div className={classes.price}>
                {hasDiscount ? (
                  <div>
                    <p className={classes.oldPrice}>
                      ${getSubtotal(order.items).toFixed(2)}
                    </p>
                    <p className={classes.discountPrice}>
                      ${getDiscountSubtotal(order.items).toFixed(2)}
                    </p>
                  </div>
                ) : (
                  <p>${getSubtotal(order.items).toFixed(2)}</p>
                )}
              </div>
            </section>

            <Vat vat={order.vat} />

            <div className={classes.checkoutSection}>
              <div>Shipping</div>
              <div>
                {order.delivery.method} ${order.delivery.price}
              </div>
            </div>

            <div className={classes.checkoutSection}>
              <div>Payment method</div>
              <div>{order.payment.method}</div>
            </div>

            <TotalPrice total={order.totalPrice} discount={hasDiscount} />
          </div>
        </div>
      )}
    </DataLoader>
  );
}
