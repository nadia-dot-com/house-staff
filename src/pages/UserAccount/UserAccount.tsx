import classes from "@/pages/UserAccount/UserAccount.module.scss";
import { Outlet, useLocation } from "react-router-dom";
import { NavAccount } from "@/pages/UserAccount/NavAccount/NavAccount";
import { useUserContext } from "@/context/UserContext";
import { MakeLogin } from "@/pages/UserAccount/MakeLogin/MakeLogin";
import { DataLoader } from "@/components/DataLoader/DataLoader";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/ErrorFallback/ErrorFallback";
import { PageTransition } from "@/components/PageTransition/PageTransition";

export default function UserAccount() {
  const { user, isLoading, error } = useUserContext();
  const location = useLocation();

  const displayName = user?.name
    ? Array.from(new Set(user.name.split(" "))).join(" ")
    : "";

  return (
    <PageTransition>
      <div className={classes.userWrapper}>
        {user ? (
          <DataLoader loading={isLoading} loaded={!isLoading} error={error}>
            <>
              <h1 className={classes.helloUser}>Hello, {displayName} ;)</h1>

              <NavAccount />

              <section className={classes.content}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <PageTransition key={location.pathname}>
                    <Outlet />
                  </PageTransition>
                </ErrorBoundary>
              </section>
            </>
          </DataLoader>
        ) : (
          <MakeLogin />
        )}
      </div>
    </PageTransition>
  );
}
