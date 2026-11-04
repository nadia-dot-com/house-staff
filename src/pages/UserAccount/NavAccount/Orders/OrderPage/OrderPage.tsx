import classes from "@/pages/UserAccount/NavAccount/Orders/OrderPage/OrderPage.module.scss";
import { useParams } from "react-router-dom";
import { Vat } from "@/pages/UserAccount/NavAccount/ShoppingCart/CheckoutReview/CheckoutSections/VatSection/VatSection";
import { TotalPrice } from "@/pages/UserAccount/NavAccount/ShoppingCart/CheckoutReview/CheckoutSections/TotalSection/TotalSection";
import { useOrderFromOrders } from "@/hooks/orders/useOrderFromOrders";
import { DataLoader } from "@/components/DataLoader/DataLoader";
import { Subtotal } from "@/components/Subtotal/Subtotal";
import { OrderList } from "@/pages/UserAccount/NavAccount/ShoppingCart/CheckoutReview/CheckoutSections/OrderList/OrderList";

export default function OrderPage() {
  const { orderId } = useParams();
  const { order, isLoading, error } = useOrderFromOrders(orderId);

  const hasDiscount = order?.items.some((el) => el.discount > 0) ?? false;

  return (
    <DataLoader loading={isLoading} loaded={!!order} error={error}>
      <div className={classes.summaryPanel}>
      {order && (
        <>
          <OrderList orderItems={order?.items ?? []} />
          <Subtotal arr={order?.items ?? []} />
          <Vat vat={order.vat} />
          <div className={classes.section}>
            <div>Shipping</div>
            <div>
              {order.delivery.method} ${order.delivery.price.toFixed(2)}
            </div>
          </div>
          <div className={classes.section}>
            <div>Payment method</div>
            <div>{order.payment.method}</div>
          </div>
          <TotalPrice total={order.totalPrice} discount={hasDiscount} />
        </>
      )}
      </div>
    </DataLoader>
  );
}
