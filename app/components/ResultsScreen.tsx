'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '../hooks/useQuiz';
import { useTheme } from '../theme/ThemeProvider';
import { Button } from './ui/Button';

export const ResultsScreen: React.FC = () => {
  const { score, questions, restart, setShowResults } = useQuiz();
  const { darkMode } = useTheme();
  
  const percentage = Math.round((score / questions.length) * 100);
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-xl mx-auto p-4">
        <motion.div className="text-center py-8">
          <h1 className="text-3xl font-bold mb-6">测试结果</h1>
          <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} mb-6`}>
            <p className="text-2xl font-bold mb-4">得分: {score} / {questions.length}</p>
            <p className="text-lg">正确率: {percentage}%</p>
            
            <div className="my-6">
              <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getScoreColorClass(percentage)}`} 
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
            
            <div className="mt-4">
              {getFeedbackMessage(percentage)}
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <Button
              onClick={restart}
              variant="primary"
              size="lg"
              className="w-full"
            >
              重新开始
            </Button>
            
            <Button
              onClick={() => setShowResults(false)}
              variant="secondary"
              size="lg"
              className="w-full"
            >
              查看答案
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const getScoreColorClass = (percentage: number) => {
  if (percentage >= 80) return 'bg-gradient-to-r from-green-400 to-green-600';
  if (percentage >= 60) return 'bg-gradient-to-r from-blue-400 to-blue-600';
  if (percentage >= 40) return 'bg-gradient-to-r from-amber-400 to-amber-600';
  return 'bg-gradient-to-r from-red-400 to-red-600';
};

const getFeedbackMessage = (percentage: number) => {
  if (percentage >= 80) {
    return (
      <p className="text-green-500 dark:text-green-400 text-lg font-semibold">
        优秀! 你对环境设备学科知识掌握得很好!
      </p>
    );
  } else if (percentage >= 60) {
    return (
      <p className="text-blue-500 dark:text-blue-400 text-lg font-semibold">
        不错! 再多练习一下就能更好!
      </p>
    );
  } else if (percentage >= 40) {
    return (
      <p className="text-amber-500 dark:text-amber-400 text-lg font-semibold">
        继续加油! 可以重复测试来提高成绩。
      </p>
    );
  } else {
    return (
      <p className="text-red-500 dark:text-red-400 text-lg font-semibold">
        需要更多练习! 不要放弃，坚持学习！
      </p>
    );
  }
};