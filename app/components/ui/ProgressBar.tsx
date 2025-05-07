import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  showLabel?: boolean;
  showPercentage?: boolean;
  className?: string;
  height?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'red' | 'amber';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  showLabel = false,
  showPercentage = true,
  className = '',
  height = 'md',
  color = 'blue',
}) => {
  const percentage = Math.round((value / max) * 100);
  
  const heightStyles = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };
  
  const colorStyles = {
    blue: 'bg-gradient-to-r from-blue-500 to-blue-600',
    green: 'bg-gradient-to-r from-green-500 to-green-600',
    red: 'bg-gradient-to-r from-red-500 to-red-600',
    amber: 'bg-gradient-to-r from-amber-500 to-amber-600',
  };
  
  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            进度
          </span>
          {showPercentage && (
            <span className="font-medium text-gray-600 dark:text-gray-300">
              {percentage}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full ${heightStyles[height]} bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner`}>
        <div
          className={`${heightStyles[height]} ${colorStyles[color]} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};