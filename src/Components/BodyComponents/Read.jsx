import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ArticleSlider = () => {
    const articles = [
        {
            id: 1,
            title: 'Статья 1',
            imageUrl: '/src/Components/pictures/карусель1.jpeg',
            link: 'https://tailwindcss.com/docs/padding'
        },
        {
            id: 2,
            title: 'Статья 2',
            imageUrl: 'https://via.placeholder.com/300',
            link: '/article/2'
        },
        {
            id: 3,
            title: 'Статья 3',
            imageUrl: 'https://via.placeholder.com/300',
            link: '/article/3'
        },
        // Добавьте другие статьи по аналогии
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="items-center h-72 w-full mb-11">
            <Slider {...settings}>
                {articles.map(article => (
                    <div key={article.id}>
                        <a href={article.link}>
                            <div className="relative">
                                <img src={article.imageUrl} alt={article.title} className="h-72 w-11/12"  />
                                <p className="absolute top-0 left-0 text-black p-2">{article.title}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ArticleSlider;
