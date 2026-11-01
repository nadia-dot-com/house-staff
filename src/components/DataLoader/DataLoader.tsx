import { ReactNode } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import { MODE } from "@/api/config";
import { ERROR_MESSAGES } from "@/constants/messages";
import { AppError } from "@/errors";

type DataLoader = {
  loading: boolean;
  loaded: boolean;
  error: Error | null;
  children: ReactNode;
};

const resolveError = (error: Error | null) => {
  if (error) {
    if (error instanceof AppError || MODE !== "production") {
      return error;
    }

    return new AppError(ERROR_MESSAGES.GENERIC);
  }
};

export function DataLoader({ loading, loaded, error, children }: DataLoader) {
  const userError = resolveError(error);
  return (
    <>
      {loading && <LoadingSpinner />}
      {userError && <ErrorState message={userError.message} />}
      {loaded && children}
    </>
  );
}
