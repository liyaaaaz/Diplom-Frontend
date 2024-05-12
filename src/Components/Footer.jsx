import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white shadow border-2 border-yellow-400 h-[75px]">
            <div className="w-full max-w-screen-xl mx-auto pt-2 pr-4 pl-4 pb-2">
                <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
                    {/* Номер телефона */}
                    {/* Адреса */}
                    <div className="flex flex-col mb-4 sm:mb-0">
                        <a className="flex items-center">
                            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-black">г.Краснодар, ул.Фрунзе, 141</span>
                        </a>
                        <a className="flex items-center">
                            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-black">г.Краснодар, ул.им.Калинина, 456</span>
                        </a>
                    </div>
                    {/* Ссылки на WhatsApp и Telegram */}
                    <div>
                    <span className="self-center text-sm font-medium ml-4 mb-4 sm:mb-0 dark:text-black">+7 905 470 77 66</span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline hover:text-green-600 text-green-600 me-4 md:me-6">WhatsApp</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:text-green-600 text-green-600 me-4 md:me-6">Telegram</a>
                        </li>
                    </ul>
                    </div>
                   
                </div>
                {/* Копирайт */}
                <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className=" hover:text-green-600 text-green-600">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}
