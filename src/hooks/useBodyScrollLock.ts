import { useEffect } from "react";

export function useBodyScrollLock(isCartOpen?: boolean, isLoginModalOpen?: boolean) {
    useEffect(() => {
        document.body.style.overflow = isCartOpen || isLoginModalOpen ? "hidden" : "";
    }, [isCartOpen, isLoginModalOpen])
}