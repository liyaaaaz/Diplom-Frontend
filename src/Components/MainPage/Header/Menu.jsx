import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const MenuButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isAuth = !!localStorage.getItem("token");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLoginClick = () => {
    navigate("/signin");
  };

  const handleContactsClick = () => {
    navigate("/contacts");
  };

  const handleCalculatingClick = () => {
    navigate("/calculating");
  };

  const handleBasketClick = () => {
    navigate("/basket");
  };

  return (
    <div className="relative">
      <button
        className="flex items-center bg-white text-green-600 font-bold text-base px-4 rounded focus:outline-none h-7 cursor-default"
        onClick={toggleMenu}
      >
        <span className="mr-2">Меню</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      {menuOpen && (
        <div className="top-4 absolute right-0 mt-4 py-2 w-48 bg-white border rounded shadow-lg z-10">
          <button
            className="font-bold block px-4 py-2 text-green-600 hover:bg-green-200 w-full text-center"
            onClick={handleLoginClick}
          >
            Войти
          </button>
          <hr className="border-green-600 w-44 mt-2 ml-[8px] border-[1px]" />
          {isAuth && (
            <div
              className="flex items-center mt-2 ml-2 cursor-default"
              onClick={handleBasketClick}
            >
              <ShoppingCartIcon className="h-5 w-5 mr-[4px] text-green-600" />{" "}
              <a className="text-green-600 text-sm ml-2" href="#">
                Корзина
              </a>
            </div>
          )}
          <div
            className="flex items-center mt-2 ml-2 cursor-default"
            onClick={handleCalculatingClick}
          >
            <CalculateRoundedIcon className="h-5 w-5 mr-[4px] text-green-600" />
            <a className="text-green-600 text-sm ml-2" href="#">
              Калькулятор
            </a>
          </div>
          <div
            className="flex items-center mt-2 ml-2 cursor-default"
            onClick={handleContactsClick}
          >
            <PhoneRoundedIcon className="h-5 w-5 mr-[4px] text-green-600" />{" "}
            <a className="text-green-600 text-sm ml-2" href="#">
              Контакты
            </a>
          </div>
          <div className="flex items-center mt-2 ml-2 cursor-default">
            <InfoRoundedIcon className="h-5 w-5 mr-[4px] text-green-600" />{" "}
            <a className="text-green-600 text-sm ml-2" href="#">
              О нас
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
