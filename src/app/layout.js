import { Geist, Geist_Mono } from "next/font/google";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'] 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Biology Learning System",
  description: "Interactive educational platform for human anatomy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-blue-50">
        {/* 导航组件 */}
        <Navigation /> 
        {/* 添加导航到全局布局 */}
        <main className="container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
