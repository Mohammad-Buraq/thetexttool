import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">TextTools.AI</Link>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tools/remove-empty-lines" className="hover:underline">Remove Empty Lines</Link>
      </nav>
    </header>
  );
}

export default Header;
