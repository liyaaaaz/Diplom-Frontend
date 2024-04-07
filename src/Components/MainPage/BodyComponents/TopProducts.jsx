import React from 'react';

const CategoryBlock = () => {
    // Массив с категориями
    const categories = [
        { id: 1, title: 'Строительные смеси', image: '/src/Components/pictures/сух.jpg', link: 'https://tailwindcss.com/docs/padding', price: '100 руб.' },
        { id: 2, title: 'Гипсокартон и комплектующие', image: '/src/Components/pictures/гипс проф.jpg', link: 'https://tailwindcss.com/docs/padding', price: '200 руб.' },
        { id: 3, title: 'Плинтуса', image: '/src/Components/pictures/плин.jpg', link: 'https://tailwindcss.com/docs/padding', price: '150 руб.' },
        { id: 4, title: 'Инструменты', image: '/src/Components/pictures/инстр.jpeg', link: 'https://tailwindcss.com/docs/padding', price: '300 руб.' },
        { id: 5, title: 'Категория 5', image: '/src/Components/pictures/инстр.jpeg', link: 'https://tailwindcss.com/docs/padding', price: '250 руб.' },
        // Добавьте другие категории по аналогии
    ];

    return (
       
        <div className='h-[230px] w-[1050px] ml-36 border-yellow-400 border-2' >
        <div className='h-[220px] w-[1040px] relative'>
        <h2 className="text-lg font-medium ml-4 mb-1 text-black p-2 mt-1">Хиты продаж</h2>
        <div className='flex justify-center ml-44' style={{ maxWidth: '700px' }}>
            {categories.map(category => (
                <div key={category.id} className="flex-shrink-0 px-4 py-2">
                    <a href={category.link}> 
                        <div className="bg-white rounded-sm shadow-lg overflow-hidden h-36 w-44 border-yellow-400 border-2">
                            <img src={category.image} alt={category.title} className="w-24 h-24 object-cover mx-auto" />
                            <div className="p-2 text-center">
                                <h3 className="text-xs font-semibold mb-1 text-black">{category.title}</h3>
                                <p className="text-xs text-gray-600">{category.price}</p>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>  
    </div>
    </div>
    );
};

export default CategoryBlock;
