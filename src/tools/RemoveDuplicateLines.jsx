import React, { useState } from "react";

function RemoveDuplicateLines() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleRemoveDuplicates = () => {
    const lines = text.split("\n");
    const uniqueLines = [...new Set(lines)];
    setResult(uniqueLines.join("\n"));
  };

  const handleClear = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Remove Duplicate Lines</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Eliminate duplicate lines from your text easily and accurately.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <textarea
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full p-4 mb-4 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <div className="flex flex-wrap gap-3 mb-4">
          <button
            onClick={handleRemoveDuplicates}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Remove Duplicates
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear
          </button>
        </div>

        {result && (
          <div>
            <strong className="block mb-2 text-gray-700 dark:text-gray-300">
              Result:
            </strong>
            <pre className="whitespace-pre-wrap break-words text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded text-gray-800 dark:text-gray-100">
              {result}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default RemoveDuplicateLines;
