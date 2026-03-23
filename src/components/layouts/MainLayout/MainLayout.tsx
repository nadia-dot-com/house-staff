import classes from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Wrapper } from "../../Wrapper/Wrapper";
import { ToastContainer } from "react-toastify";
import { useUserContext } from "@/context/UserContext";
import { LoginModal } from "../../modals/LoginModal/LoginModal";
import { OrderModal } from "../../modals/OrderModal/OrderModal";
import { Suspense } from "react";
import { LoadingSpinner } from "../../LoadingSpinner/LoadingSpinner";
import { useCartUiContext } from "@/context/CartUIContext";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../../ErrorFallback/ErrorFallback";
import { AnimatePresence } from "motion/react";

export function MainLayout() {
  const { isCartOpen } = useCartUiContext();
  const { isLoginModalOpen } = useUserContext();

  return (
    <div className={classes.layout}>
      <Header />
      <main>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingSpinner />}>
            <Wrapper>
              <Outlet />
            </Wrapper>
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />

      <AnimatePresence>{isCartOpen && <OrderModal />}</AnimatePresence>
      <AnimatePresence>{isLoginModalOpen && <LoginModal />}</AnimatePresence>

      <ToastContainer
        role="alert"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        className={classes.toastContainer}
      />
    </div>
  );
}
