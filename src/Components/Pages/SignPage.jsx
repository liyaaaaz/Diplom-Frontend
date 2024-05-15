import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    navigate("/reg");
  };

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    onSubmit: async (values) => {
      const response = await fetch(`http://localhost:4444/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!result.message) {
        const user = JSON.stringify(result.userData);

        localStorage.setItem("token", result.token);
        localStorage.setItem("user", user);
      }
      if (result.userData.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    },
  });
  return (
    <>
      <div className="flex flex-1 flex-col justify-center px-6 py-9 lg:px-8 bg-white w-full h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/src/Components/pictures/картинка.jpg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center font-bold text-black">
            <span className=" leading-9 tracking-tight  text-2xl   hover:underline hover:text-green-600">
              Вход{" "}
            </span>
            <span className=" mx-4">/</span>
            <span
              className="text-2xl  hover:underline hover:text-green-600"
              onClick={handleRegistrationClick}
            >
              Регистрация
            </span>
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Номер телефона
              </label>
              <div className="mt-2 text-center">
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  autoComplete="phone"
                  onChange={formik.handleChange}
                  required
                  className="pl-2 block w-full rounded-md bg-white border-[0.5px] border-black py-1.5 text-gray-900 shadow-sm placeholder:text-green-600 placeholder:ml-3 placeholder:text-lg  sm:text-sm sm:leading-6"
                  pattern="+7 ([0-9]){3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                  placeholder="+7 (9__) - ___ - __ - __"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 "
                >
                  Пароль
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-green-600 hover:text-green-400"
                  >
                    Забыли пароль?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md py-1.5 bg-white border-[0.5px] border-black text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
