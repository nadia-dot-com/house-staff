import "@/index.scss";
import App from "@/App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "@/context/CartContext.tsx";
import { UserProvider } from "@/context/UserContext.tsx";
import { CheckoutProvider } from "@/context/CheckoutContext.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/query/queryClient.ts";
import { initGlobalErrorHandler } from "@/utils/globalErrorHandler.ts";
import { CategoryProvider } from "@/context/CategoryContext.tsx";
import { WishlistProvider } from "@/context/WishlistContext.tsx";
import { CartUIProvider } from "@/context/CartUIContext.tsx";

initGlobalErrorHandler();

// eslint-disable-next-line react-refresh/only-export-components -- entry point, never hot-reloaded as a component boundary
function Main() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <CategoryProvider>
            <CartProvider>
              <WishlistProvider>
                <CheckoutProvider>
                  <CartUIProvider>
                    <App />
                  </CartUIProvider>
                </CheckoutProvider>
              </WishlistProvider>
            </CartProvider>
          </CategoryProvider>
        </UserProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Main />);
