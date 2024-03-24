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
    };

    return (
        <div className='h-72 w-auto'>
            <Slider {...settings}>
                {articles.map(article => (
                    <div key={article.id}>
                        <a href={article.link}>
                            <div className="relative ">
                                <img src={article.imageUrl} alt={article.title} className='h-72 w-auto pl-24'/>
                                <p className="absolute top-0 left-4 text-black p-2">{article.title}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ArticleSlider;
