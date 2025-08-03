import React, { useState } from "react";

function RemoveLineBreaks() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleRemoveBreaks = () => {
    const result = text.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ");
    setOutput(result.trim());
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Remove Line Breaks</h1>
      <textarea
        className="w-full p-3 border rounded mb-4 bg-white dark:bg-gray-800"
        rows={6}
        placeholder="Paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleRemoveBreaks}
      >
        Remove Line Breaks
      </button>
      {output && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded border dark:border-gray-600">
          <p className="whitespace-pre-wrap">{output}</p>
        </div>
      )}
    </div>
  );
}

export default RemoveLineBreaks;
