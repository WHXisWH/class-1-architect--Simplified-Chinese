import React, { createContext, useState, useEffect } from 'react';
import questions from '@/data/environment.json';

// 問題のカテゴリー分類
const categories = {
  "日照 & 日射": [1, 2, 3, 4],
  "采光 & 照明": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  "色彩": [17, 18, 19, 20, 21],
  "室内气候和气象": [22, 23, 24, 25],
  "换气": [26, 27, 28, 29, 30, 31, 32],
  "热 & 结露": [33, 34, 35, 36, 37, 38, 39, 40],
  "音响": [41, 42, 43, 44, 45],
  "空调设备": [46, 47, 48, 49, 50, 51, 52, 53, 54],
  "节能 & 维护": [55, 56, 57, 58, 59, 60, 61, 62, 63, 64],
  "给排水 & 卫生设备": [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76],
  "电气设备": [77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
  "电梯设备": [87, 88, 89],
  "防火 & 防灾设备": [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
};

interface QuizContextType {
  questions: typeof questions;
  categories: typeof categories;
  current: number;
  setCurrent: (index: number) => void;
  selected: string | null;
  setSelected: (choice: string | null) => void;
  showAnswer: boolean;
  setShowAnswer: (show: boolean) => void;
  score: number;
  setScore: (score: number) => void;
  answers: (string | null)[];
  setAnswers: (answers: (string | null)[]) => void;
  showResults: boolean;
  setShowResults: (show: boolean) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  progress: number;
  handleSelect: (choice: string) => void;
  next: () => void;
  prev: () => void;
  restart: () => void;
  selectCategory: (category: string) => void;
}

export const QuizContext = createContext<QuizContextType | null>(null);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 進捗率を計算
    const answeredQuestions = answers.filter(answer => answer !== null).length;
    setProgress((answeredQuestions / questions.length) * 100);
  }, [answers]);

  const handleSelect = (choice: string) => {
    setSelected(choice);
    setShowAnswer(true);
    
    // 回答を記録
    const newAnswers = [...answers];
    newAnswers[current] = choice;
    setAnswers(newAnswers);
    
    if (choice === questions[current].answer) {
      setScore(score + 1);
    }
  };

  const next = () => {
    if (current + 1 >= questions.length) {
      setShowResults(true);
    } else {
      setSelected(null);
      setShowAnswer(false);
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setSelected(answers[current - 1]);
      setShowAnswer(answers[current - 1] !== null);
      setCurrent(current - 1);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResults(false);
    setSelectedCategory(null);
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    // このカテゴリの最初の問題にジャンプ
    const categoryQuestionIndex = categories[category][0] - 1;
    setCurrent(categoryQuestionIndex);
    setSelected(answers[categoryQuestionIndex]);
    setShowAnswer(answers[categoryQuestionIndex] !== null);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        categories,
        current,
        setCurrent,
        selected,
        setSelected,
        showAnswer,
        setShowAnswer,
        score,
        setScore,
        answers,
        setAnswers,
        showResults,
        setShowResults,
        selectedCategory,
        setSelectedCategory,
        progress,
        handleSelect,
        next,
        prev,
        restart,
        selectCategory,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};