import React from "react";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

const Layout = () => {
  const { token, refreshToken } = useSelector((state) => state.auth);
  return (
    <>
      <AppHeader />

      <Outlet />
    </>
  );
};

export default Layout;
