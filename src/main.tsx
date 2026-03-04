import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/CartContext.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import { CheckoutProvider } from "./context/CheckoutContext.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./query/queryClient.ts";
import { initGlobalErrorHandler } from "./utils/globalErrorHandler.ts";
import App from "./App.tsx";
import { CategoryProvider } from "./context/CategoryContext.tsx";
import { WishlistProvider } from "./context/WishlistContext.tsx";

import "./index.css";
import { CartUIProvider } from "./context/CartUIContext.tsx";

initGlobalErrorHandler();

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
