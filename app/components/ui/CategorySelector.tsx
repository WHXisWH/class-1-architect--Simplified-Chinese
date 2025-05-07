'use client';

import React from 'react';

interface CategorySelectorProps {
  categories: Record<string, number[]>;
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  className?: string;
  darkMode?: boolean;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  className = '',
  darkMode = false,
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="text-sm font-semibold mb-2 uppercase tracking-wider text-gray-500 dark:text-gray-400">
        选择类别
      </h2>
      <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-2 rounded-lg border border-gray-200 dark:border-gray-700 scrollbar-thin">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${
            selectedCategory === null
              ? 'bg-blue-600 text-white'
              : darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
        >
          全部
        </button>
        {Object.keys(categories).map(category => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-md'
                : darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};