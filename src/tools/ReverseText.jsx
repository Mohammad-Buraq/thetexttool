import React, { useState } from "react";

function ReverseText() {
  const [text, setText] = useState("");

  const reverseAll = () => {
    setText(text.split("").reverse().join(""));
  };

  const reverseLines = () => {
    const reversed = text.split("\n").map(line => line.split("").reverse().join(""));
    setText(reversed.join("\n"));
  };

  const clearText = () => setText("");

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Reverse Text</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Reverse entire text or each line individually.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <textarea
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 mb-4 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste or write your text..."
        ></textarea>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={reverseAll}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Reverse All Text
          </button>
          <button
            onClick={reverseLines}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Reverse Each Line
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

export default ReverseText;
