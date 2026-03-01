import { createContext, ReactNode, useEffect, useState } from "react";
import { UserContextProps, UserData } from "../types/userTypes";
import { createContextHook } from "../hooks/createContextHook";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TOKEN, USER } from "../data/locatStorageKey";
import { useCurrentUser } from "../hooks/user/useCurrentUser";
import { useToggle } from "../hooks/useToggle";

export const UserContext = createContext<UserContextProps | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useLocalStorage<string | null>(TOKEN, null);
  const [user, setUser] = useLocalStorage<UserData | null>(USER, null);

  const [isLoginModalOpen, setIsLoginModalOpen] = useToggle(false);
  const { data, isLoading, error } = useCurrentUser(token);

  useEffect(() => {
    if (isLoading) return;

    setUser(data ?? null);
  }, [data, isLoading, setUser]);

  useEffect(() => {
    document.body.style.overflow = isLoginModalOpen ? "hidden" : "";
  }, [isLoginModalOpen]);

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        updateToken: setToken,
        isLoginModalOpen,
        updateUser: setUser,
        toggleModalOpen: setIsLoginModalOpen,
        logout,
        isLoading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = createContextHook(UserContext, UserProvider);
