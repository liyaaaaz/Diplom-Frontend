import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from './Arrow.jsx';

const ProductsBlock = () => {
    // Массив с категориями
    const categories = [
        { id: 1, title: 'Строительные смеси', image: '/src/Components/pictures/сух.jpg',link: 'https://tailwindcss.com/docs/padding', price: '100 руб.' },
        { id: 2, title: 'Гипсокартон', image: '/src/Components/pictures/гипс проф.jpg',link: 'https://tailwindcss.com/docs/padding', price: '200 руб.' },
        { id: 3, title: 'Плинтуса', image: '/src/Components/pictures/плин.jpg',link: 'https://tailwindcss.com/docs/padding', price: '150 руб.'},
        { id: 4, title: 'Инструменты', image: '/src/Components/pictures/инстр.jpeg',link: 'https://tailwindcss.com/docs/padding', price: '300 руб.' },
        { id: 5, title: 'Категория 5', image: '/src/Components/pictures/инстр.jpeg', link: 'https://tailwindcss.com/docs/padding', price: '250 руб.' },
        // Добавьте другие категории по аналогии
    ];

    // Настройки для слайдера
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <Arrow direction="right" green/>,
    };

    return (
        <div className='h-[230px] w-[1050px] ml-20 border-yellow-400 border-2 mt-8' > 
            <div className='h-[220px] w-[1040px] ml-[15px] relative'>
            <h2 className="text-lg font-medium mb-1 text-black p-2 mt-1">Товары по скидкам</h2>
            <Slider {...settings} >
                {categories.map(category => (
                    <div key={category.id} className="pr-2 flex-shrink-0">
                        <a href={category.link}> 
                            <div className="bg-white rounded-sm shadow-lg overflow-hidden h-[146px] w-44 border-yellow-400 border-2">
                                <img src={category.image} alt={category.title} className=" w-24 h-24 object-cover ml-5" />
                                <div className=" text-center">
                                    <h3 className=" text-xs font-semibold mb-2 text-black">{category.title}</h3>
                                    <p className="text-xs text-gray-600">{category.price}</p>
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

export default ProductsBlock;
