'use client';

import React from 'react';
import { useQuiz } from '../hooks/useQuiz';
import { useTheme } from '../theme/ThemeProvider';

export const NavigationControls: React.FC = () => {
  const { 
    current, 
    score, 
    showAnswer, 
    next, 
    prev, 
    questions 
  } = useQuiz();
  const { darkMode } = useTheme();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 p-3 z-10">
      <div className="max-w-xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="px-4 py-2 rounded-lg bg-blue-50 text-blue-800 font-medium dark:bg-blue-900 dark:text-blue-100">
            得分: {score} / {current + (showAnswer ? 1 : 0)}
          </span>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={prev}
            disabled={current === 0}
            className={`px-4 py-2 rounded-lg flex items-center ${
              current === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400' 
                : darkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            上一题
          </button>
          
          {showAnswer && (
            <button
              onClick={next}
              className={`px-4 py-2 rounded-lg flex items-center ${
                darkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {current + 1 >= questions.length ? '查看结果' : '下一题'}
              {current + 1 < questions.length && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};