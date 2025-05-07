import React from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '../hooks/useQuiz';
import { useTheme } from '../theme/ThemeProvider';

export const QuizCard: React.FC = () => {
  const { current, questions, selectedCategory } = useQuiz();
  const { darkMode } = useTheme();
  
  const question = questions[current];
  
  if (!question) return null;
  
  return (
    <motion.div
      className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg rounded-xl p-6 mb-6 transition-colors duration-300 border`}
      animate={{ scale: [0.95, 1], opacity: [0.8, 1] }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold dark:bg-blue-900 dark:text-blue-100">
          问题 {question.id}
        </span>
        
        {selectedCategory && (
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium dark:bg-purple-900 dark:text-purple-100">
            {selectedCategory}
          </span>
        )}
      </div>
      
      <p className="text-lg md:text-xl leading-relaxed mb-2">
        {question.question.replace(/^\d+\.\s+/, '')}
      </p>
      
      <HintText />
    </motion.div>
  );
};

const HintText: React.FC = () => {
  const { showAnswer } = useQuiz();
  
  if (showAnswer) return null;
  
  return (
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 italic">
      选择下方的"〇"或"×"来回答
    </p>
  );
};