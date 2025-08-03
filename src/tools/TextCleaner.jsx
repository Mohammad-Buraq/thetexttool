import React, { useState } from "react";

function TextCleaner() {
  const [text, setText] = useState("");

  const cleanText = () => {
    let cleaned = text
      .replace(/[\r\n\t]+/g, " ")           // remove line breaks and tabs
      .replace(/\s+/g, " ")                // collapse multiple spaces
      .replace(/[^\x20-\x7E]+/g, "")       // remove non-ASCII
      .trim();
    setText(cleaned);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">🧹 Text Cleaner</h1>
      <textarea
        className="w-full h-40 p-4 border rounded bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your messy text..."
      ></textarea>
      <button onClick={cleanText} className="btn mt-4">Clean Text</button>
    </div>
  );
}

export default TextCleaner;
