import { Outlet } from "react-router-dom";
import { SideBar } from "../SlideBar/SlideBar";

export const LayoutAdmin = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  if (user?.role !== "admin") {
    return <>Доступ запрещен</>;
  }
  return (
    <>
      <SideBar />
      <div
        id="background-element"
        className="p-8 md:ml-60 min-h-screen bg-white"
      >
        <Outlet />
      </div>
    </>
  );
};