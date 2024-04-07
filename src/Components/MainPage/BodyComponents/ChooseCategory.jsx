import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CategoryBlock = () => {
    // Массив с категориями
    const categories = [
        { id: 1, title: 'Строительные смеси', image: '/src/Components/pictures/сух.jpg',link: 'https://tailwindcss.com/docs/padding' },
        { id: 2, title: 'Гипсокартон и комплектующие', image: '/src/Components/pictures/гипс проф.jpg',link: 'https://tailwindcss.com/docs/padding' },
        { id: 3, title: 'Плинтуса', image: '/src/Components/pictures/плин.jpg',link: 'https://tailwindcss.com/docs/padding' },
        { id: 4, title: 'Инструменты', image: '/src/Components/pictures/инстр.jpeg',link: 'https://tailwindcss.com/docs/padding' },
        { id: 5, title: 'Категория 5', image: '/src/Components/pictures/инстр.jpeg', link: 'https://tailwindcss.com/docs/padding' },
        // Добавьте другие категории по аналогии
    ];

    // Настройки для слайдера
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div className='h-[230px] w-[1050px] ml-36 border-yellow-400 border-2 mt-28' >
            <div className='h-[220px] w-[1040px] ml-4 relative'>
            <h2 className="text-lg font-medium mb-1 text-black p-2 mt-1">Выбирайте по категориям</h2>
            <Slider {...settings} >
                {categories.map(category => (
                    <div key={category.id} className="px-1 mt-1">
                        <a href={category.link}> 
                            <div className="bg-white rounded-sm shadow-lg overflow-hidden h-36 w-44 border-yellow-400 border-2">
                                <img src={category.image} alt={category.title} className=" w-24 h-24 object-cover ml-5" />
                                <div className="p-2">
                                    <h3 className=" text-xs font-semibold mb-2 text-black">{category.title}</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </Slider>  
           
        </div>
    </div>
        
    );
};

export default CategoryBlock;
