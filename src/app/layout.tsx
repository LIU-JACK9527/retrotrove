import type { Metadata } from 'next';
import './globals.css';

// 配置网站元数据
export const metadata: Metadata = {
  title: 'Age of Empires DS | Retro Games Online',
  description: 'Play Age of Empires DS retro games online for free in your browser. Relive the classic strategy game experience.',
  keywords: 'Age of Empires DS, retro games, online games, browser games, classic games, strategy games',
  authors: [{ name: 'Retro Games Team' }],
};

// 配置 viewport
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// 根布局组件
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 引入 Google Fonts - Press Start 2P (复古游戏风格字体) */}
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        {/* 引入 Google Fonts - Inter (现代无衬线字体) */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-light text-dark min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
