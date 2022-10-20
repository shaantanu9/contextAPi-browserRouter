import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);
  const intialdata = {
    isAuth,
    setIsAuth,
    token,
    setToken
  };
  return (
    <AppContext.Provider value={intialdata}>{children}</AppContext.Provider>
  );
}
