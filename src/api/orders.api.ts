import { OrderResponse } from "@/types/api/order.response";
import { API_URL } from "@/api/config";

export const fetchOrders = async (token: string): Promise<OrderResponse[]> => {
  const res = await fetch(`${API_URL}/orders`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ??
        "Failed to fetch order. An unexpected Error was received from the server.",
    );
  }

  return data;
};
