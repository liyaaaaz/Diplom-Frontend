import React from 'react'
import MenuButton from "./MainPage/HeaderComponents/Menu";
import Catalog from './MainPage/HeaderComponents/Catalog';
import { useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate = useNavigate();

    const handleMainClick = () => {
    navigate("/");
    };

  return (
    <div>
    <header className="border-yellow-400 rounded-sm border-2 w-full h-[55px] bg-white align-top">
    <div className="mx-auto max-w-7xl ml-2">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="mt-1 items-center left-0">
            <img className=" h-11 w-11 mt-0" src="/src/Components/pictures/логотип.png" alt="Your Company"></img>
          </div>
          <div className="hidden sm:ml-2 sm:block align-middle">
            <div className="flex space-x-4 h-16 align-middle">
              <a className="text-green-600 rounded-md px-1 pt-2 text-2xl font-bold cursor-default" aria-current="page" onClick={handleMainClick}>Склад №5</a>
              <a className="border-l-2 border-solid border-yellow-400 h-[53px]"></a>
            </div>
          </div>
        </div>
        <div className= "absolute inset-y-0 left-0 items-center ml-52 sm:block sm:inset-0 align-middle">
          <div className="relative mr-6">
            <div className=' mb-2 text-green-600'><Catalog/></div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto  align-middle">
          <div className="relative ml-3">
            <div className='mb-2'>
              <MenuButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
      </div>
    </div>
</header>
</div>
  );
}
