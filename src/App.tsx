import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { MainLayout } from "@/components/layouts/MainLayout/MainLayout";
import { NotFounded } from "@/pages/NotFound/NotFound";
import { MainPage } from "@/pages/MainPage/MainPage";
import { ROUTES } from "@/config/routes/Routes";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import { GoogleCallback } from "@/pages/GoogleCallback/GoogleCallback";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/ErrorFallback/ErrorFallback";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";

const Contact = lazy(() => import("@/pages/Contact/Contact"));
const ProductsPage = lazy(() => import("@/pages/ProductsPage/ProductsPage"));
const ProductPage = lazy(
  () => import("@/pages/ProductsPage/ProductPage/ProductPage"),
);
const GuestWishlist = lazy(
  () => import("@/pages/GuestWishlist/GuestWishlist"),
);

const UserAccount = lazy(() => import("@/pages/UserAccount/UserAccount"));
const Profile = lazy(
  () => import("@/pages/UserAccount/NavAccount/Profile/Profile"),
);
const ShoppingCart = lazy(
  () => import("@/pages/UserAccount/NavAccount/ShoppingCart/ShoppingCart"),
);
const Orders = lazy(
  () => import("@/pages/UserAccount/NavAccount/Orders/Orders"),
);
const Wishlist = lazy(
  () => import("@/pages/UserAccount/NavAccount/Wishlist/Wishlist"),
);
const OrderPage = lazy(
  () => import("@/pages/UserAccount/NavAccount/Orders/OrderPage/OrderPage"),
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

              <Route path={ROUTES.guestWishlist} element={<GuestWishlist />} />

              <Route path={ROUTES.userAccount} element={<UserAccount />}>
                <Route
                  index
                  element={<Navigate to={ROUTES.profile} replace />}
                />

                <Route path={ROUTES.profile} element={<Profile />} />
                <Route path={ROUTES.shoppingCart} element={<ShoppingCart />} />
                <Route path={ROUTES.orders} element={<Orders />} />
                <Route
                  path={ROUTES.orderPage(":orderId")}
                  element={<OrderPage />}
                />
                <Route path={ROUTES.wishlist} element={<Wishlist />} />
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
