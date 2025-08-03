import React, { useState } from "react";

function TextToBinary() {
  const [text, setText] = useState("");
  const [binary, setBinary] = useState("");

  const convertToBinary = () => {
    const result = text
      .split("")
      .map(char => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
    setBinary(result);
  };

  const clear = () => {
    setText("");
    setBinary("");
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Text to Binary</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Convert plain text into binary code.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <textarea
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 mb-4 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text to convert..."
        ></textarea>

        <div className="flex gap-3 mb-4">
          <button
            onClick={convertToBinary}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Convert
          </button>
          <button
            onClick={clear}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear
          </button>
        </div>

        {binary && (
          <div className="text-sm text-gray-800 dark:text-gray-100 whitespace-pre-wrap break-words">
            <strong>Binary Output:</strong><br />
            {binary}
          </div>
        )}
      </div>
    </div>
  );
}

export default TextToBinary;
