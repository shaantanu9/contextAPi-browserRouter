import { Route, Routes } from "react-router";
import Login from "../components/LoginForm";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
export default function AllRoutes() {
  const { isAuth } = useContext(AppContext);
  const routes = [
    {
      path: "/navbar",
      element: <Navbar />
    },
    {
      path: "/",
      element: <Home />
    }
  ];
  return (
    <Routes>
      {routes.map((el) => (
        <Route path={el.path} element={el.element} />
      ))}
      <Route path="/login" element={!isAuth ? <Login /> : <Home />} />
    </Routes>
  );
}
