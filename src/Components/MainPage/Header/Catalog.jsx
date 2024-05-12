import React, { useState } from 'react';

const Catalog = () => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Сухие строительные смеси',
            link: '/category/1'
        },
        {
            id: 2,
            name: 'Грунтовки',
            link: '/category/2'
        },
        {
            id: 3,
            name: 'Готовые строительные смеси',
            link: '/category/2'
        },
        {
            id: 4,
            name: 'Гиспсокартон и комплектующие',
            link: '/category/2'
        },
        {
            id: 5,
            name: 'Плинтуса',
            link: '/category/2'
        },
        {
            id: 6,
            name: 'Клеи, герметики, силиконы',
            link: '/category/2'
        },
        {
            id: 7,
            name: 'Скотч, пленка',
            link: '/category/2'
        },
        {
            id: 8,
            name: 'Инструменты',
            link: '/category/2'
        },
        {
            id: 9,
            name: 'Фанера, брус, ДВП',
            link: '/category/2'
        },
        {
            id: 10,
            name: 'Декоративные углы',
            link: '/category/2'
        },
        {
            id: 11,
            name: 'Пороги',
            link: '/category/2'
        },
        {
            id: 12,
            name: 'Обои, стеклохолст',
            link: '/category/2'
        },
        {
            id: 13,
            name: 'Крепеж',
            link: '/category/2'
        },
        
    ]);

    const [expandedCategories, setExpandedCategories] = useState([]);

    const toggleCategory = (categoryId) => {
        if (expandedCategories.includes(categoryId)) {
            setExpandedCategories(expandedCategories.filter(id => id !== categoryId));
        } else {
            setExpandedCategories([...expandedCategories, categoryId]);
        }
    };

    return (
        <div className="relative">
            <button
                className="flex items-center bg-white left-0 rounded focus:outline-none mt-3 h-7"
                onClick={() => toggleCategory('catalog')}
            >
                <span className="ml-1 text-green-600 font-bold text-base">Каталог</span>
                <svg className="fill-green-600 w-4 h-4 ml-1" viewBox="0 0 9 14">
                    <path className='' d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" />
                </svg>
            </button>
            {expandedCategories.includes('catalog') && (
                <ul className="absolute top-4 left-0 mt-4 divide-y divide-gray-200 bg-white border rounded shadow-lg z-10">
                    {categories.map(category => (
                        <li key={category.id}>
                            <a
                                href={category.link}
                                className="flex justify-between items-center w-full py-2 px-4 text-left focus:outline-none text-green-600"
                                onClick={() => toggleCategory(category.id)}
                            >
                                <span>{category.name}</span>
                                {/* <svg
                                    className={`w-4 h-4 text-yellow-400 fill-yellow-400 transition-transform transform ${
                                        expandedCategories.includes(category.id) ? 'rotate-0' : 'rotate-180'
                                    }`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M13.293 6.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg> */}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Catalog;
