import { RefObject } from "react";

export function scrollByDirection(
  direction: "left" | "right",
  containerRef: RefObject<HTMLUListElement | null>,
) {
  const scrollAmount = 200;

  containerRef.current?.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
}
