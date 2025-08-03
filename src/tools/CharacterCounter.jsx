import React, { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  const totalChars = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Character Counter</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Count total characters with and without spaces.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <textarea
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 mb-4 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type or paste your text here..."
        ></textarea>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div><strong>{totalChars}</strong> Characters (with spaces)</div>
          <div><strong>{charsNoSpaces}</strong> Characters (no spaces)</div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCounter;
