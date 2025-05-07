import React from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '../hooks/useQuiz';
import { useTheme } from '../theme/ThemeProvider';

export const Explanation: React.FC = () => {
  const { showAnswer, selected, current, questions } = useQuiz();
  const { darkMode } = useTheme();
  
  if (!showAnswer) return null;
  
  const question = questions[current];
  const isCorrect = selected === question.answer;
  
  return (
    <motion.div
      className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} rounded-xl p-5 mb-6 border shadow-md`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`flex items-center mb-4 p-3 rounded-lg ${
        isCorrect 
          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
      }`}>
        <div className={`flex items-center justify-center w-8 h-8 mr-3 rounded-full ${
          isCorrect 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {isCorrect ? '✓' : '✗'}
        </div>
        <div>
          <p className="font-semibold">
            {isCorrect ? '回答正确！' : '回答错误！'}
          </p>
          <p className="text-sm">
            正确答案是: <span className="font-bold">{question.answer}</span>
          </p>
        </div>
      </div>
      
      <div className={`mt-4 ${
        darkMode ? 'bg-gray-700' : 'bg-white'
      } p-4 rounded-lg border border-gray-200 dark:border-gray-600`}>
        <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
          </svg>
          解析
        </h3>
        <p className="text-sm leading-relaxed">{question.explanation}</p>
      </div>
    </motion.div>
  );
};