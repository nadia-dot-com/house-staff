import classes from "@/pages/UserAccount/NavAccount/Orders/Orders.module.scss";
import { useOrders } from "@/hooks/orders/useOrders";
import { DataLoader } from "@/components/DataLoader/DataLoader";
import { OrderRow } from "@/pages/UserAccount/NavAccount/Orders/OrderRow/OrderRow";

export default function Orders() {
  const { data: orders, isLoading, error } = useOrders();

  const ordersUi = orders ? [...orders].reverse() : [];

  return (
    <DataLoader loading={isLoading} loaded={!!orders} error={error}>
      <div className={classes.tableContainer}>
        <table className={classes.ordersTable}>
          <thead className={classes.thead}>
            <tr>
              <th className={classes.th}>Order</th>
              <th className={classes.th}>Date</th>
              <th className={classes.th}>Status</th>
              <th className={classes.th}>Total</th>
              <th className={classes.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ordersUi.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </DataLoader>
  );
}
