import React, { useState } from 'react';

const MenuButton = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="relative">
            <button
                className="flex items-center bg-white text-green-600 font-bold text-xl py-2 px-4 rounded focus:outline-none"
                onClick={toggleMenu}
            >
                <span className="mr-2">Меню</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                
            </button>
            {menuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded shadow-lg">
                    <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                        Войти
                    </button>
                    <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                        Избранное
                    </button>
                    <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                        О нас
                    </button>
                </div>
            )}
        </div>
    );
};

export default MenuButton;
