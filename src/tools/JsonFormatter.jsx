import React, { useState } from "react";

function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      setError("❌ Invalid JSON");
      setOutput("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">🔧 JSON Formatter & Validator</h1>
      <textarea
        className="w-full h-40 p-4 border rounded bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 mb-4"
        placeholder="Paste JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button onClick={formatJson} className="btn">Format & Validate</button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {output && (
        <pre className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded overflow-auto text-sm">
          {output}
        </pre>
      )}
    </div>
  );
}

export default JsonFormatter;
