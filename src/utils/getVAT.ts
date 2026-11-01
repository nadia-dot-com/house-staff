import { roundMoney } from "@/utils/roundMoney";

export const getVAT = (subtotal: number, vatRate: number) => {
  return roundMoney((vatRate * subtotal) / 100);
};
