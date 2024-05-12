import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../MainPage/Header/Header";
import Footer from "../MainPage/Footer";

export default function AppLayout() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />

      <div className="min-h-[85vh]">
        <Outlet />
      </div>

      <div className=" bg-white top-0">
        <Footer />
      </div>
    </div>
  );
}
