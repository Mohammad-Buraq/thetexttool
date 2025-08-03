import React, { useState } from "react";

function TextDiff() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const getDiff = () => {
    const lines1 = text1.split("\n");
    const lines2 = text2.split("\n");
    const diff = lines1.filter(line => !lines2.includes(line));
    return diff.join("\n");
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Text Compare</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Compare two blocks of text and find differences.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <textarea
            rows={6}
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none"
            placeholder="First text block..."
          ></textarea>

          <textarea
            rows={6}
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none"
            placeholder="Second text block..."
          ></textarea>
        </div>

        <div className="mt-4">
          <strong className="block text-gray-700 dark:text-gray-300 mb-2">Differences:</strong>
          <pre className="text-sm text-gray-800 dark:text-gray-100 whitespace-pre-wrap break-words bg-gray-100 dark:bg-gray-900 p-4 rounded">
            {getDiff()}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default TextDiff;
