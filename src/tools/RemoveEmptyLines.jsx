import React, { useState } from 'react';

function RemoveEmptyLines() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleRemove = () => {
    const cleaned = input.split('\n').filter(line => line.trim() !== '').join('\n');
    setOutput(cleaned);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Remove Empty Lines</h1>
      <p className="mb-4">Paste your text below. Click the button to remove all blank lines.</p>
      <textarea
        className="w-full h-40 p-3 border rounded bg-white dark:bg-gray-800 dark:text-white"
        placeholder="Paste your text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button
        onClick={handleRemove}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Remove Empty Lines
      </button>
      <h2 className="text-xl font-semibold mt-6 mb-2">Cleaned Text</h2>
      <textarea
        className="w-full h-40 p-3 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
        readOnly
        value={output}
      ></textarea>
    </div>
  );
}

export default RemoveEmptyLines;
