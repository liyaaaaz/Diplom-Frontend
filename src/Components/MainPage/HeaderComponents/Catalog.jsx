import React, { useState } from 'react';

const Catalog = () => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Категория 1',
            subcategories: ['Подкатегория 1', 'Подкатегория 2', 'Подкатегория 3']
        },
        {
            id: 2,
            name: 'Категория 2',
            subcategories: ['Подкатегория 4', 'Подкатегория 5', 'Подкатегория 6']
        },
        // Добавьте другие категории по аналогии
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
                <span className="ml-1 text-green-600 font-bold text-base ">Каталог</span>
                <svg className="fill-green-600 w-4 h-4 ml-1 " viewBox="0 0 9 14">
                    <path className='' d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" /></svg>
            </button>
            {expandedCategories.includes('catalog') && (
                <ul className="absolute top-4 left-0 mt-4 divide-y divide-gray-200 bg-white border rounded shadow-lg z-10">
                    {categories.map(category => (
                        <li key={category.id}>
                            <button
                                className="flex justify-between items-center w-full py-2 px-4 text-left focus:outline-none"
                                onClick={() => toggleCategory(category.id)}
                            >
                                <span>{category.name}</span>
                                <svg
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
                                </svg>
                            </button>
                            {expandedCategories.includes(category.id) && (
                                <ul className="pl-4">
                                    {category.subcategories.map((subcategory, index) => (
                                        <li key={index} className="py-1">{subcategory}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Catalog;
