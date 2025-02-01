import { createContext, createSignal, JSX, useContext } from "solid-js";
import type { Accessor, Setter } from "solid-js";
import { temp_store_read } from "./helpers";

export interface AuthUser {
  name: string | null;
  email: string | null;
  photo?: string | null;
  uid: string;
  reload: () => Promise<void>;
}

interface ContextType {
  authUser: Accessor<AuthUser | undefined>;
  setAuthUser: Setter<AuthUser | undefined>;
}

const AppContext = createContext<ContextType>();

export const useAppContext = () => {
  return useContext(AppContext)!;
};

export const AppContextProvider = (props: { children: JSX.Element }) => {
  const [authUser, setAuthUser] = createSignal<AuthUser | undefined>(
    temp_store_read("checko-auth")
  );

  const value = {
    authUser,
    setAuthUser,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
