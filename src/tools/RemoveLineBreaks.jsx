import React, { useState } from "react";

function RemoveLineBreaks() {
  const [text, setText] = useState("");

  const removeBreaks = () => {
    return text.replace(/(\r\n|\n|\r)/g, " ");
  };

  const getStats = () => {
    const matches = text.match(/(\r\n|\n|\r)/g);
    return {
      totalBreaks: matches ? matches.length : 0,
    };
  };

  const cleanedText = removeBreaks();
  const { totalBreaks } = getStats();

  const handleCopy = () => {
    navigator.clipboard.writeText(cleanedText);
    alert("Output copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([cleanedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `no-line-breaks-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="tool-container">
      <h2>Remove Line Breaks</h2>

      {/* Input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste text with line breaks..."
        rows={8}
        className="form-control mb-3"
      ></textarea>

      {/* Output */}
      <div className="output-box p-3 border rounded mb-3 bg-light">
        <p><strong>Line Breaks Removed:</strong> {totalBreaks}</p>

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

export default RemoveLineBreaks;
