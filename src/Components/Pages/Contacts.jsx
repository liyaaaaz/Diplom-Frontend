import React from "react";
import Header from "../MainPage/Header/Header.jsx";
import Footer from "../MainPage/Footer";

export default function Contacts() {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center px-6 py-9 lg:px-8 bg-white w-full h-auto">
        <p className=" text-green-600 text-2xl pt-3 pb-3 font-bold">
          Контактная информация
        </p>
        <div className="max-w-screen-xl mx-auto w-full">
          <div className="h-[280px] w-[880px] ml-44 border-gray-300 border-2 mt-3">
            <h2 className=" text-base font-medium mb-1 text-black p-2 mt-1 text-center">
              Номера телефонов
            </h2>
            <div className=" items-center">
              <span className="text-base text-gray-400 ml-[250px]">
                ул.Фрунзе, 141
              </span>
              <span className="text-base text-gray-400 pl-[180px]">
                ул.им.Калинина, 456
              </span>
              <div className="flex items-center mt-2 h-auto">
                <img
                  src="/src/Components/pictures/телефон.png"
                  className=" w-32 h-32 ml-1"
                />
                <div className=" ml-14 flex content-center items-center">
                  <div className="border-2 border-green-600  rounded h-[130px] w-[250px]">
                    <p className=" pt-2">
                      <span className="text-black text-sm ml-4 ">
                        т. сот.: +7 (905) 470 77 66 Артём
                      </span>
                    </p>
                    <p className=" pt-1">
                      <span className="text-black text-sm ml-4 ">
                        т. сот.: +7 (918) 660 35 37 Сергей
                      </span>
                    </p>
                    <p className=" pt-1">
                      <span className="text-black text-sm ml-4 ">
                        т. сот.: +7 (988) 470 77 67 Николай
                      </span>
                    </p>
                    <p className=" pt-1">
                      <span className="text-black text-sm ml-4 ">
                        т. сот.: +7 (918) 398 77 63 Андрей
                      </span>
                    </p>
                  </div>
                  <a className="border-l-2 border-solid border-gray-300 h-[150px] ml-6 pr-6"></a>
                  <div className="border-2 border-green-600 rounded h-[130px] w-[250px]">
                    <p className=" pt-2">
                      <span className="text-black text-sm ml-4 ">
                        т. сот.: +7 (905) 470 77 66 Артём
                      </span>
                    </p>
                    <p className=" pt-1">
                      <span className="text-black text-sm ml-4 ">
                        т. сот.: +7 (918) 045 45 50 Иван
                      </span>
                    </p>
                    <p className=" pt-1">
                      <span className="text-black text-sm ml-4 ">
                        т. сот: +7 (918) 448 02 01 Елена
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-yellow-200 w-[520px] border-[0.5px] border-yellow-300 rounded mt-4">
          <span className="text-sm text-black ml-1">
            Доставляем по всему Краснодару. Подробнее по номеру{" "}
            <span className="text-sm text-black underline">
              +7 (905) 470-77-66
            </span>
          </span>
        </div>

        <div className="mt-11 h-auto">
          <p className=" text-green-600 text-2xl font-bold">Адреса магазинов</p>
          <div>
            <hr className="border-l-2 border-solid border-gray-400 w-full mt-5"></hr>
            <div className="pt-2 pb-2">
              <p className="text-sm text-black">г.Краснодар, ул.Фрунзе, 141</p>
              <span className="text-sm mt-1 text-gray-500 underline font-bold">
                Режим работы:{" "}
              </span>
              <span className="text-sm text-gray-500 font-bold ml-2">
                пн-вс{" "}
              </span>
              <span className="text-sm text-gray-500 font-bold ml-2">
                07:30 - 17:00
              </span>
            </div>
          </div>
          <div>
            <hr className="border-l-2 border-solid border-gray-400 w-full mt-2"></hr>
            <div className="pt-2 pb-2">
              <p className="text-sm text-black">
                г.Краснодар, ул.им.Калинина, 456
              </p>
              <span className="text-sm mt-1 text-gray-500 underline font-bold">
                Режим работы:{" "}
              </span>
              <span className="text-sm text-gray-500 font-bold ml-2">
                пн-вс{" "}
              </span>
              <span className="text-sm text-gray-500 font-bold ml-2">
                07:30 - 17:00
              </span>
            </div>
            <hr className="border-l-2 border-solid border-gray-400 w-full mt-2"></hr>
          </div>

          <div className="w-full h-96 mt-11">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A619beb2ae3b17a7a91028494f02cb10680ef314dee666100fde33071c442d734&amp;source=constructor"
              className=" rounded w-full h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
