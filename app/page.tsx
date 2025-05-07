'use client';

import React from 'react';
import { QuizProvider } from './contexts/QuizContext';
import { QuizCard } from './components/QuizCard';
import { AnswerButtons } from './components/AnswerButtons';
import { Explanation } from './components/Explanation';
import { NavigationControls } from './components/NavigationControls';
import { ResultsScreen } from './components/ResultsScreen';
import { CategorySelector } from './components/ui/CategorySelector';
import { ProgressBar } from './components/ui/ProgressBar';
import { useQuiz } from './hooks/useQuiz';
import { ThemeToggle } from './theme/ThemeToggle';

const QuizApp = () => {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
};

const QuizContent = () => {
  const { 
    showResults, 
    progress, 
    categories, 
    selectedCategory, 
    selectCategory,
    questions,
    current 
  } = useQuiz();
  
  if (showResults) {
    return <ResultsScreen />;
  }
  
  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="max-w-xl mx-auto p-4 pb-16">
        {/* ヘッダー */}
        <header className={`sticky top-0 z-10 flex justify-between items-center mb-4 py-3 px-2 backdrop-blur-md rounded-xl bg-opacity-80 border border-gray-200 shadow-sm ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
          <h1 className="text-xl md:text-2xl font-bold">环境设备学科〇×问题</h1>
          
          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </header>
        
        {/* プログレスバー */}
        <ProgressBar 
          value={current + 1} 
          max={questions.length} 
          showLabel 
          className="mb-6 mt-2"
        />
        
        {/* カテゴリー選択 */}
        <CategorySelector 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={selectCategory}
        />
        
        {/* 問題と回答領域 */}
        <QuizCard />
        <AnswerButtons />
        <Explanation />
        
        {/* ナビゲーション */}
        <NavigationControls />
      </div>
    </div>
  );
};

export default QuizApp;
