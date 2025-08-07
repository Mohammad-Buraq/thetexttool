import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

function RemoveDuplicateLines() {
  const [text, setText] = useState("");
  const output = [...new Set(text.split("\n"))].join("\n");

  const handleCopy = () => navigator.clipboard.writeText(output);
  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "no-duplicates.txt";
    link.click();
  };

  return (
    <ToolWrapper
      title="Remove Duplicate Lines"
      description="Eliminate repeated lines from your text instantly. Useful for cleaning lists, logs, or data."
      inputLabel="Enter your text below:"
      outputLabel="Text without duplicates:"
      input={
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="6"
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
        />
      }
      output={
        <textarea
          value={output}
          readOnly
          rows="6"
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
        />
      }
      buttons={
        <>
          <button onClick={handleCopy} className="bg-blue-600 px-4 py-2 rounded-md">Copy</button>
          <button onClick={handleDownload} className="bg-green-600 px-4 py-2 rounded-md">Download</button>
          <button onClick={() => setText("")} className="bg-red-600 px-4 py-2 rounded-md">Clear</button>
        </>
      }
      content={
        <>
          <p><strong>Why Remove Duplicate Lines?</strong></p>
          <p>This tool helps clean up lists, repeated log entries, or duplicate rows in data. Great for programmers, writers, and analysts.</p>
          <p><strong>Keywords:</strong> remove duplicate lines, clean text, eliminate duplicates online</p>
        </>
      }
    />
  );
}

export default RemoveDuplicateLines;
