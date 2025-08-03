import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to TextTools.AI</h1>
      <p className="mb-6 text-lg">A collection of smart, fast, and easy-to-use tools to edit and transform your text.</p>
      <h2 className="text-2xl font-semibold mb-2">Featured Tools</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li><Link to="/tools/remove-empty-lines" className="text-blue-500 hover:underline">Remove Empty Lines</Link></li>
      </ul>
    </div>
  );
}

export default Home;
