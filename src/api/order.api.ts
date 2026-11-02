import { OrderPayload } from "@/types/api/order.payload";
import { OrderResponse } from "@/types/api/order.response";
import { API_URL } from "@/api/config";
import { handleResponse } from "@/api/handleResponse";

export async function sendOrderToServer(
  token: string,
  order: OrderPayload,
): Promise<OrderResponse> {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });

  return handleResponse<OrderResponse>(
    res,
    "Failed to create order. An unexpected Error was received from the server.",
  );
}
