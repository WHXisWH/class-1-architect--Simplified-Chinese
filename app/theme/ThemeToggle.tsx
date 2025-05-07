'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  
  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full transition-all duration-300 ${
        darkMode 
          ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
          : 'bg-gray-700 text-white hover:bg-gray-600'
      } ${className}`}
      aria-label={darkMode ? '明るいテーマに切り替え' : '暗いテーマに切り替え'}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};