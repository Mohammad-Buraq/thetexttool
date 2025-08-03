import React, { useState } from "react";

function WordCounter() {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.split(/\n+/).filter(p => p.trim() !== "").length;

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Word Counter</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Count words, characters, sentences, and paragraphs instantly.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <textarea
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 mb-4 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type or paste your text here..."
        ></textarea>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div><strong>{wordCount}</strong> Words</div>
          <div><strong>{charCount}</strong> Characters</div>
          <div><strong>{sentenceCount}</strong> Sentences</div>
          <div><strong>{paragraphCount}</strong> Paragraphs</div>
        </div>
      </div>
    </div>
  );
}

export default WordCounter;
