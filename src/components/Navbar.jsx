import { useContext, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
export default function Navbar() {
  const { token, isAuth, setToken, setIsAuth } = useContext(AppContext);

  const logoutHandler = () => {
    setIsAuth(false);
    setToken(null);
  };
  return (
    <>
      <h1>This is Navbar</h1>
      {isAuth && <p>{token}</p>}
      <button onClick={() => logoutHandler()}>Logout</button>
    </>
  );
}
