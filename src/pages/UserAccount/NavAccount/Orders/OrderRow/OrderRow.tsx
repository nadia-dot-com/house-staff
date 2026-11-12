import { cn } from "@/utils/cn";
import classes from "@/pages/UserAccount/NavAccount/Orders/OrderRow/OrderRow.module.scss";
import { OrderResponse } from "@/types/api/order.response";
import { Button } from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";

export function OrderRow({ order }: { order: OrderResponse }) {
  const navigate = useNavigate();

  const formattedDate = new Date(order.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleViewClick = () => navigate(`${order.id}`);

  return (
    <tr className={classes.row}>
      <td className={cn(classes.cell, classes.orderId)}>{order.id}</td>
      <td className={classes.cell}>{formattedDate}</td>
      <td className={classes.cell}>{order.status}</td>
      <td className={cn(classes.cell, classes.total)}>${order.totalPrice}</td>
      <td className={classes.cell}>
        <Button
          bgColor="#ddd"
          textColor="black"
          text="VIEW"
          onClick={handleViewClick}
          ariaLabel="check order"
        />
      </td>
    </tr>
  );
}
