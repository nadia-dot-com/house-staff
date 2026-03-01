import { keyBy } from "lodash";
import { DeliveryMethod } from "../types/api/options";
import { OrderItem } from "../types/orderTypes";
import { calculateCheckoutPrice } from "../utils/calculateCheckoutPrice";
import { useOptions } from "./options/useOptions";
import { useMemo } from "react";

export function useCheckoutPrice({
  cartItems,
  country,
  delivery,
}: {
  cartItems: OrderItem[];
  country: string | null;
  delivery: DeliveryMethod | null;
}) {
  const { data } = useOptions();

  const countriesMap = useMemo(
    () => keyBy(data?.countries, "name"),
    [data?.countries],
  );
  console.log("Wybrany kraj:", country);
  console.log("Dostępne kraje w mapie:", countriesMap);

  const vatRate =
    country && countriesMap[country] ? countriesMap[country].vatRate : 0;
  console.log("Wyliczony VAT Rate:", vatRate);
  
  const deliveryPrice = delivery?.price ?? 0;

  return calculateCheckoutPrice({
    cartItems,
    deliveryPrice,
    vatRate,
  });
}
