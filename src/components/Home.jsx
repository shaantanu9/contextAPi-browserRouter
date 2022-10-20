import { useContext, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
export default function Navbar() {
  const { token, isAuth, setToken, setIsAuth } = useContext(AppContext);

  return (
    <>
      <h1>This is Home</h1>
      {/* {isAuth && <p>{token}</p>} */}
    </>
  );
}
