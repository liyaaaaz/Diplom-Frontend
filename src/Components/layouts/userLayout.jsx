import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function UserLayout() {
  const isAuth = !!localStorage.getItem("token");
  const router = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      router("/signin");
    }
  }, [isAuth]);
  return (
    <div className="w-full h-screen bg-white">
      <Outlet />
    </div>
  );
}
