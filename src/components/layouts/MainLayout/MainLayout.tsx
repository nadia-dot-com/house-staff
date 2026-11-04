import classes from "@/components/layouts/MainLayout/MainLayout.module.scss";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { PageContainer } from "@/components/PageContainer/PageContainer";
import { ToastContainer } from "react-toastify";
import { useUserContext } from "@/context/UserContext";
import { LoginModal } from "@/components/modals/LoginModal/LoginModal";
import { CartModal } from "@/components/modals/CartModal/CartModal";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import { useCartUiContext } from "@/context/CartUIContext";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/ErrorFallback/ErrorFallback";
import { AnimatePresence } from "motion/react";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

export function MainLayout() {
  const { isCartOpen } = useCartUiContext();
  const { isLoginModalOpen } = useUserContext();
  useBodyScrollLock(isCartOpen, isLoginModalOpen);

  return (
    <div className={classes.layout}>
      <Header />

      <AnimatePresence>{isCartOpen && <CartModal />}</AnimatePresence>
      <AnimatePresence>{isLoginModalOpen && <LoginModal />}</AnimatePresence>

      <main aria-hidden={isCartOpen || isLoginModalOpen}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingSpinner />}>
            <PageContainer>
              <Outlet />
            </PageContainer>
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />

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
