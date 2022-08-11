import { createContext } from "react";
import { AuthContextType } from "../interfaces/auth";
import { authMock } from "../mock/auth-mock";

export const AuthContext = createContext({} as AuthContextType);

//For now, we will use the mock auth data
export function AuthContextProvider({ children }: { children: any }) {
  return (
    <AuthContext.Provider value={authMock}>{children}</AuthContext.Provider>
  );
}
