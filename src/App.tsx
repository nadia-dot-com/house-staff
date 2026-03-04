import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { MainLayout } from "./components/layouts/MainLayout/MainLayout";
import { NotFounded } from "./pages/NotFound/NotFound";
import { MainPage } from "./pages/MainPage/MainPage";
import { ROUTES } from "./config/Routes";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { GoogleCallback } from "./pages/GoogleCallback/GoogleCallback";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback/ErrorFallback";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";

const Contact = lazy(() => import("./pages/Contact/Contact"));
const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));
const ProductPage = lazy(
  () => import("./pages/ProductsPage/ProductPage/ProductPage"),
);
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));

const UserAccount = lazy(() => import("./pages/UserAccount/UserAccount"));
const MyProfile = lazy(
  () => import("./pages/UserAccount/NavAccount/MyProfile/MyProfile"),
);
const ShoppingCart = lazy(
  () => import("./pages/UserAccount/NavAccount/ShoppingCart/ShoppingCart"),
);
const MyOrders = lazy(
  () => import("./pages/UserAccount/NavAccount/MyOrders/MyOrders"),
);
const MyWishlist = lazy(
  () => import("./pages/UserAccount/NavAccount/MyWishlist/MyWishlist"),
);
const OrderPage = lazy(
  () => import("./pages/UserAccount/NavAccount/MyOrders/OrderPage/OrderPage"),
);
function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter basename={ROUTES.basePath}>
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path={ROUTES.googleCallback} element={<GoogleCallback />} />

            <Route path={ROUTES.mainLayout} element={<MainLayout />}>
              <Route index element={<MainPage />} />

              <Route path={ROUTES.contact} element={<Contact />} />

              <Route path={ROUTES.products} element={<ProductsPage />}>
                <Route path=":category" element={<Outlet />}>
                  <Route path=":itemId" element={<ProductPage />} />
                </Route>
              </Route>

              <Route path={ROUTES.guestWishlist} element={<Wishlist />} />

              <Route path={ROUTES.userAccount} element={<UserAccount />}>
                <Route
                  index
                  element={<Navigate to={ROUTES.profile} replace />}
                />

                <Route index path={ROUTES.profile} element={<MyProfile />} />
                <Route path={ROUTES.shoppingCart} element={<ShoppingCart />} />
                <Route path={ROUTES.myOrders} element={<MyOrders />} />
                <Route
                  path={ROUTES.orderPage(":orderId")}
                  element={<OrderPage />}
                />
                <Route path={ROUTES.myWishlist} element={<MyWishlist />} />
              </Route>

              <Route path="*" element={<NotFounded />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
