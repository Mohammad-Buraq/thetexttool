import React, { useState } from "react";

function RemoveEmptyLines() {
  const [text, setText] = useState("");

  const removeEmptyLines = () => {
    return text
      .split("\n")
      .filter(line => line.trim() !== "")
      .join("\n");
  };

  const getLineStats = () => {
    const allLines = text.split("\n");
    const nonEmpty = allLines.filter(line => line.trim() !== "");
    return {
      original: allLines.length,
      nonEmpty: nonEmpty.length,
      removed: allLines.length - nonEmpty.length,
    };
  };

  const cleanedText = removeEmptyLines();
  const { original, nonEmpty, removed } = getLineStats();

  const handleCopy = () => {
    navigator.clipboard.writeText(cleanedText);
    alert("Output copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([cleanedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `no-empty-lines-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="tool-container">
      <h2>Remove Empty Lines</h2>

      {/* Input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text with empty lines..."
        rows={8}
        className="form-control mb-3"
      ></textarea>

      {/* Output */}
      <div className="output-box p-3 border rounded mb-3 bg-light">
        <p><strong>Original Lines:</strong> {original}</p>
        <p><strong>Non-Empty Lines:</strong> {nonEmpty}</p>
        <p><strong>Empty Lines Removed:</strong> {removed}</p>

        <p><strong>Output:</strong></p>
        <pre
          className="border p-2 bg-white rounded"
          style={{ whiteSpace: "pre-wrap", minHeight: "100px" }}
          aria-label="Output text"
        >
          {cleanedText}
        </pre>
      </div>

      {/* Buttons */}
      <div className="d-flex flex-wrap gap-2">
        <button onClick={handleCopy} className="btn btn-primary">Copy Output</button>
        <button onClick={handleDownload} className="btn btn-secondary">Download Output</button>
        <button onClick={handleClear} className="btn btn-outline-danger">Clear</button>
      </div>
    </div>
  );
}

export default RemoveEmptyLines;
