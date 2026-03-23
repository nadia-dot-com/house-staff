import classes from "./UserAccount.module.css";
import { Outlet } from "react-router-dom";
import { NavAccount } from "./NavAccount/NavAccount";
import { useUserContext } from "@/context/UserContext";
import { MakeLogin } from "./MakeLogin/MakeLogin";
import { DataLoader } from "@/components/DataLoader/DataLoader";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/ErrorFallback/ErrorFallback";
import { PageTransition } from "@/components/PageTransition/PageTransition";

export default function UserAccount() {
  const { user, isLoading, error } = useUserContext();

  return (
    <DataLoader loading={isLoading} loaded={!isLoading} error={error}>
      <PageTransition>
        <div className={classes.userWrapper}>
          {user ? (
            <>
              <h1 className={classes.helloUser}>Hello, {user.name} ;)</h1>

              <NavAccount />

              <section className={classes.content}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <PageTransition>
                    <Outlet />
                  </PageTransition>
                </ErrorBoundary>
              </section>
            </>
          ) : (
            <MakeLogin />
          )}
        </div>
      </PageTransition>
    </DataLoader>
  );
}
