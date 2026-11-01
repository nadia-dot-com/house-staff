import { useEffect, useMemo } from "react";
import { useOptions } from "@/hooks/options/useOptions";
import { DeliveryMethod } from "@/types/api/options";
import { RadioGroup } from "@/components/RadioGroup/RadioGroup";

export function Shipping({
  delivery,
  updateDelivery,
}: {
  delivery: DeliveryMethod | null;
  updateDelivery: (data: DeliveryMethod) => void;
}) {
  const { data } = useOptions();

  const deliveryOptions = useMemo(
    () => data?.deliveryMethods ?? [],
    [data?.deliveryMethods],
  );

  useEffect(() => {
    if (!delivery && deliveryOptions.length > 0) {
      updateDelivery(deliveryOptions[0]);
    }
  }, [delivery, deliveryOptions, updateDelivery]);

  return (
    <RadioGroup
      title="Shipping"
      options={deliveryOptions}
      method={delivery}
      onClick={updateDelivery}
    />
  );
}
