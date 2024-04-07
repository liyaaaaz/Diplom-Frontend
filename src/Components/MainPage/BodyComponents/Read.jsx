import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from './Arrow.jsx';

const ArticleSlider = () => {
    const articles = [
        {
            id: 1,
            title: 'Какая стяжка является лучшей на рынке?',
            imageUrl: '/src/Components/pictures/карусель1.jpeg',
            link: 'https://tailwindcss.com/docs/padding'
        },
        {
            id: 2,
            title: 'Статья 2',
            imageUrl: '/src/Components/pictures/карусель1.jpeg',
            link: 'https://tailwindcss.com/docs/padding'
        },
        {
            id: 3,
            title: 'Статья 3',
            imageUrl: '/src/Components/pictures/карусель1.jpeg',
            link: 'https://tailwindcss.com/docs/padding'
        },
        // Добавьте другие статьи по аналогии
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <Arrow direction="right" green/>,
    };

    return (
        <div className='h-[347px] w-auto'>
            <Slider {...settings}>
                {articles.map(article => (
                    <div key={article.id}>
                        <a href={article.link}>
                            <div className="relative">
                                <img src={article.imageUrl} alt={article.title} className=' h-[346px] w-auto ml-[350px]'/>
                                <div className="absolute top-0 h-[150px] w-full bg-gradient-to-b from-yellow-500 to-transparent flex items-center justify-center">
                                    <p className="text-green-100 w-auto mr-[800px] bold text-xl mb-20">{article.title}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ArticleSlider;
