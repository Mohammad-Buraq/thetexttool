import React, { useState } from "react";

function TextSorter() {
  const [text, setText] = useState("");

  const sortAZ = () => {
    const lines = text.split("\n").sort();
    setText(lines.join("\n"));
  };

  const sortZA = () => {
    const lines = text.split("\n").sort().reverse();
    setText(lines.join("\n"));
  };

  const clearText = () => setText("");

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Text Sorter</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Sort lines alphabetically in ascending or descending order.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <textarea
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 mb-4 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste text to sort..."
        ></textarea>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={sortAZ}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sort A–Z
          </button>
          <button
            onClick={sortZA}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Sort Z–A
          </button>
          <button
            onClick={clearText}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextSorter;
