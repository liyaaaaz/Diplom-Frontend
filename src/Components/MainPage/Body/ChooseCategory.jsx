import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "./Arrow.jsx";
import { useNavigate } from "react-router-dom";

const CategoryBlock = () => {
  // Массив с категориями
  const navigateToLink = (link) => {
    window.location.href = link;
  };

  const handleDrybuildingMixturesClick = (link) => {
    navigateToLink(link);
  };

  const navigate = useNavigate();

  // const handleDrybuildingMixturesClick = () => {
  //   navigate("/DrybuildingMixtures");
  // };

  const categories = [
    {
      id: 1,
      title: "Сухие строительные смеси",
      image: "/src/Components/pictures/сух.jpg",
      onClick: () => {
        handleDrybuildingMixturesClick("https://skald-5.vercel.app/DrybuildingMixtures");
      },
    },
    {
      id: 2,
      title: "Грунтовки",
      image: "/src/Components/pictures/гипс проф.jpg",
      link: "https://skald-5.vercel.app/Primes",
    },
    {
      id: 3,
      title: "Готовые строительные смеси",
      image: "/src/Components/pictures/плин.jpg",
      link: "https://skald-5.vercel.app/ReadyMadeBuildingMixtures",
    },
    {
      id: 4,
      title: "Гипсокартон  и комплектующие",
      image: "/src/Components/pictures/инстр.jpeg",
      link: "https://skald-5.vercel.app/DrywallAndComponents",
    },
    {
      id: 5,
      title: "Плинтуса",
      image: "/src/Components/pictures/инстр.jpeg",
      link: "https://skald-5.vercel.app/SkirtingBoards",
    },
    {
      id: 6,
      title: "Клеи, герметики, силиконы",
      image: "/src/Components/pictures/инстр.jpeg",
      link: "https://skald-5.vercel.app/AdhesivesSealantsSilicones",
    },
    {
      id: 7,
      title: "Скотч, пленка",
      image: "/src/Components/pictures/инстр.jpeg",
      link: "https://skald-5.vercel.app/ScotchTapeFilm",
    },
    {
      id: 8,
      title: "Инструменты",
      image: "/src/Components/pictures/инстр.jpeg",
      link: "https://skald-5.vercel.app/Tools",
    },
    {
      id: 9,
      title: "Фанера, брус, двп",
      image: "/src/Components/pictures/инстр.jpeg",
      link: "https://skald-5.vercel.app/PlywoodTimberFiberboard",
    },
    {
      id: 10,
      title: "Декоративные углы",
      image: "/src/Components/pictures/инстр.jpeg",
      link: "https://skald-5.vercel.app/DecorativeCorners",
    },
    {
      id: 11,
      title: "Пороги",
      image: "/src/Components/pictures/инстр.jpeg",
      link: "https://skald-5.vercel.app/Thresholds",
    },
    {
      id: 12,
      title: "Обои, стклохолст",
      image: "/src/Components/pictures/инстр.jpeg",
      link: "https://skald-5.vercel.app/WallpaperFiberglass",
    },
    {
      id: 13,
      title: "Крепеж",
      image: "/src/Components/pictures/инстр.jpeg",
      link: "https://skald-5.vercel.app/Fasteners",
    },
  ];

  // Настройки для слайдера
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Arrow direction="right" green />,
  };

  return (
    <div className="h-[230px] w-[1050px] ml-20 border-yellow-400 border-2 mt-28">
      <div className="h-[220px] w-[1040px] ml-[15px] relative">
        <h2 className="text-lg font-medium mb-1 text-black p-2 mt-1">
          Выбирайте по категориям
        </h2>
        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category.id} className="px-1 mt-1">
              <div
                className="bg-white rounded-sm shadow-lg overflow-hidden h-36 w-44 border-yellow-400 border-2"
                onClick={category.onClick}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-24 h-24 object-cover ml-5"
                />
                <div className="p-2">
                  <h3 className="text-xs font-semibold mb-2 text-black">
                    {category.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryBlock;
