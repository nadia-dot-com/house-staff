import { RefObject, useEffect, useRef } from "react";

export function useResize(
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver(() => callbackRef.current());

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);
}
