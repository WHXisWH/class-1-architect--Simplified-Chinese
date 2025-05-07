import React from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import '../styles/globals.css';

export const metadata = {
  title: '环境设备学科〇×问题',
  description: '测试你对建筑环境设备学科知识的掌握程度',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head />
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}