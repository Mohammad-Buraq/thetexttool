import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

function TextSorter() {
  const [text, setText] = useState("");
  const sorted = text.split("\n").sort().join("\n");

  const handleCopy = () => navigator.clipboard.writeText(sorted);
  const handleDownload = () => {
    const blob = new Blob([sorted], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "sorted-text.txt";
    link.click();
  };

  return (
    <ToolWrapper
      title="Text Sorter"
      description="Sort your text lines alphabetically with this simple tool. Great for organizing lists and data."
      inputLabel="Enter text lines below:"
      outputLabel="Sorted Text:"
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
          value={sorted}
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
          <p><strong>Why Use a Text Sorter?</strong></p>
          <p>Alphabetically sort lines of text for better readability, list organization, or data presentation.</p>
          <p><strong>Keywords:</strong> sort text online, alphabetize lines, organize text</p>
        </>
      }
    />
  );
}

export default TextSorter;
