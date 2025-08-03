import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-[#0f0f0f] text-gray-900 dark:text-white">
      {/* Header */}
      <header className="bg-white dark:bg-black shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-white">TextTools AI</Link>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-10">{children}</main>

      {/* Footer */}
      <footer className="bg-white dark:bg-black text-sm text-gray-600 dark:text-gray-400 border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center flex-wrap gap-4">
          <p>© {new Date().getFullYear()} TextTools AI. All rights reserved.</p>
          <p>Built with ❤️ by ChatGPT & You</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
