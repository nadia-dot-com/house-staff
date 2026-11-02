import { OrderResponse } from "@/types/api/order.response";
import { API_URL } from "@/api/config";
import { handleResponse } from "@/api/handleResponse";

export const fetchOrders = async (token: string): Promise<OrderResponse[]> => {
  const res = await fetch(`${API_URL}/orders`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return handleResponse<OrderResponse[]>(
    res,
    "Failed to fetch order. An unexpected Error was received from the server.",
  );
};
