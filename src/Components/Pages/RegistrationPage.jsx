import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import axios from "../../axios.js"

export default function SignIn() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/signin");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      surname: "",
      secondName: "",
      phone: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        axios.post("/auth/register", values).then((res) => {
          if (res.status == 201) {
            localStorage.setItem("token", res.data.token);
            alert("Успешная авторизация!");
            localStorage.setItem("user", user);
            navigate("/");
            handleClose();
          } else {
            setIsError(true);
          }
        });
      } catch (err) {
        console.log(err);
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
            <span
              className=" leading-9 tracking-tight  text-2xl   hover:underline hover:text-green-600"
              onClick={handleLoginClick}
            >
              Вход{" "}
            </span>
            <span className=" mx-4">/</span>
            <span className="text-2xl  hover:underline hover:text-green-600">
              Регистрация
            </span>
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <TextField
              label="Фамилия"
              fullWidth
              name="surname"
              onChange={formik.handleChange}
              value={formik.values.surname}
            />
            <TextField
              label="Имя"
              fullWidth
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />

            <TextField
              label="Отчество"
              fullWidth
              name="secondName"
              onChange={formik.handleChange}
              value={formik.values.secondName}
            />
            <TextField
              label="Телефон"
              fullWidth
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <TextField
              label="Пароль"
              fullWidth
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div>
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
    </>
  );
}
