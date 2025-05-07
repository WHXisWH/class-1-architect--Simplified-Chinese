'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '../hooks/useQuiz';
import { useTheme } from '../theme/ThemeProvider';

export const AnswerButtons: React.FC = () => {
  const { handleSelect, selected, showAnswer, questions, current } = useQuiz();
  const { darkMode } = useTheme();
  
  const question = questions[current];
  
  return (
    <div className="flex justify-center space-x-8 mb-8">
      <AnswerButton 
        choice="〇"
        isSelected={selected === "〇"}
        isCorrect={question.answer === "〇"}
        darkMode={darkMode}
        onClick={() => !showAnswer && handleSelect("〇")}
        disabled={showAnswer}
      />
      
      <AnswerButton 
        choice="×"
        isSelected={selected === "×"}
        isCorrect={question.answer === "×"}
        darkMode={darkMode}
        onClick={() => !showAnswer && handleSelect("×")}
        disabled={showAnswer}
      />
    </div>
  );
};

interface AnswerButtonProps {
  choice: "〇" | "×";
  isSelected: boolean;
  isCorrect: boolean;
  darkMode: boolean;
  onClick: () => void;
  disabled: boolean;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  choice,
  isSelected,
  isCorrect,
  darkMode,
  onClick,
  disabled
}) => {
  const { showAnswer } = useQuiz();
  
  const getButtonColorClass = () => {
    if (showAnswer) {
      if (isSelected) {
        return isSelected === question.answer 
          ? "bg-green-500 text-white" 
          : "bg-red-500 text-white";
      }
      return "bg-gray-300 text-gray-600";
    }
    
    return darkMode
      ? "bg-blue-500 hover:bg-blue-600 text-white"
      : "bg-blue-600 hover:bg-blue-700 text-white";
  };
  
  return (
    <motion.div
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`flex-1 max-w-[130px] h-[130px] py-4 rounded-xl flex items-center justify-center font-bold text-2xl shadow-md ${getButtonColorClass()} transition-colors`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center">
        <span className="text-3xl mb-1">{choice}</span>
        {showAnswer && (
          <span className="text-xs font-normal mt-2">
            {isCorrect && "正确"}
          </span>
        )}
      </div>
    </motion.div>
  );
};
