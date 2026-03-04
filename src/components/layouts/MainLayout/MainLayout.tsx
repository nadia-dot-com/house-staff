import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Wrapper } from "../../Wrapper/Wrapper";
import { ToastContainer } from "react-toastify";
import { useUserContext } from "../../../context/UserContext";
import { LoginModal } from "../../modals/LoginModal/LoginModal";
import { OrderModal } from "../../modals/OrderModal/OrderModal";

import classes from "./MainLayout.module.css";
import { Suspense } from "react";
import { LoadingSpinner } from "../../LoadingSpinner/LoadingSpinner";
import { useCartUiContext } from "../../../context/CartUIContext";

export function MainLayout() {
  const { isCartOpen } = useCartUiContext();
  const { isLoginModalOpen } = useUserContext();

  return (
    <div className={classes.layout}>
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Wrapper>
            <Outlet />
          </Wrapper>
        </Suspense>
      </main>

      <Footer />

      {isLoginModalOpen && <LoginModal />}
      {isCartOpen && <OrderModal />}

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
