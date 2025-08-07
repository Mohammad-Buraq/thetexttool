import React, { useState } from "react";

function TextSorter() {
  const [inputText, setInputText] = useState("");
  const [sortedText, setSortedText] = useState("");

  const handleSort = () => {
    const lines = inputText.split("\n");
    const sorted = lines.sort((a, b) => a.localeCompare(b));
    setSortedText(sorted.join("\n"));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sortedText);
  };

  const downloadOutput = () => {
    const blob = new Blob([sortedText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "sorted-text.txt";
    link.click();
  };

  return (
    <div className="tool-container">
      <h2>Text Sorter</h2>

      <textarea
        className="input-box"
        rows={10}
        placeholder="Enter text to sort..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button onClick={handleSort}>Sort</button>

      <textarea
        className="output-box"
        rows={10}
        placeholder="Sorted output will appear here..."
        value={sortedText}
        readOnly
      />

      {sortedText && (
        <div className="output-actions">
          <button onClick={copyToClipboard}>Copy Output</button>
          <button onClick={downloadOutput}>Download Output</button>
        </div>
      )}
    </div>
  );
}

export default TextSorter;
