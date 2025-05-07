import { ClientThemeProvider } from './theme/ClientThemeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head />
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}