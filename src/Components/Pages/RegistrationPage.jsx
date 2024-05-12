import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";

export default function SignIn() {
    
  const navigate = useNavigate();

    const handleLoginClick = () => {
    navigate("/signin");
    };
    return (
      <>
        <div>
          <Header/>
        </div>
        <div className="flex flex-1 flex-col justify-center px-6 py-9 lg:px-8 bg-white w-full h-auto">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/src/Components/pictures/картинка.jpg"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center font-bold text-black">    
              <span className=' leading-9 tracking-tight  text-2xl   hover:underline hover:text-green-600' onClick={handleLoginClick}>Вход </span>
              <span className=" mx-4">/</span>
              <span className='text-2xl  hover:underline hover:text-green-600' >Регистрация</span>
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="surname" className="block text-sm font-medium leading-6 text-gray-900">
                  Фамилия
                </label>
                <div className="mt-2">
                  <input
                    id="surname"
                    name="surname"
                    type="surname"
                    autoComplete="surname"
                    required
                    className="block w-full bg-white border-[0.5px] border-black rounded-md py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Имя
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="current-name"
                    required
                    className="block w-full rounded-md bg-white border-[0.5px] border-black py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                  />
                </div>   
              </div>

              <div>
                <label htmlFor="secondname" className="block text-sm font-medium leading-6 text-gray-900">
                  Отчество*
                </label>
                <div className="mt-2">
                  <input
                    id="secondname"
                    name="secondname"
                    type="secondname"
                    autoComplete="secondname"
                    required
                    className="block w-full bg-white border-[0.5px] border-black rounded-md py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone_number" className="block text-sm font-medium leading-6 text-gray-900">
                  Номер телефона
                </label>
                <div className="mt-2">
                  <input
                    id="phone_number"
                    name="phone_number"
                    type="phone_number"
                    autoComplete="phone_number"
                    required
                    className="block w-full bg-white border-[0.5px] border-black rounded-md py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  E-mail*
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full bg-white border-[0.5px] border-black rounded-md py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center mt-4 mb-4">
                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border hover:bg-green-200 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 " required=""/>
                    <label for="terms" className="text-gray-500 dark:text-gray-500 ms-2 text-sm">Я принимаю условия <a className="font-medium text-green-600 hover:underline dark:text-green-400" href="#">Политика конфиденциальности</a></label>
                    </div>
              <div>
                <div className="flex items-center mt-4 mb-4">
                    <span className='text-gray-500 dark:text-gray-500 ms-2 text-sm'>* - поля необязательные для заполнения</span>
                </div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-400 "
                >
                 Зарегистрироваться
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </>
    );
  }
  