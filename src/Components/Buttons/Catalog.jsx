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
        <div className="p-4">
            <div className="flex justify-between items-center">
                <button
                    className="flex items-center bg-white text-green-600 font-bold text-lg py-2 px-4 rounded focus:outline-none"
                    onClick={() => toggleCategory('catalog')}
                >
                    <span className="ml-1 ">Каталог</span>
                    <svg className="w-6 h-6 ml-1 my-0 text-yellow-400 fill-yellow-400 " viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M13.293 6.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {expandedCategories.includes('catalog') && (
                <ul className="mt-4 divide-y divide-gray-200">
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
