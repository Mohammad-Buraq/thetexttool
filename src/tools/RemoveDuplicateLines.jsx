import React, { useState } from "react";

function RemoveDuplicateLines() {
  const [text, setText] = useState("");

  const getUniqueLines = () => {
    const lines = text.split("\n");
    const seen = new Set();
    return lines.filter(line => {
      const trimmed = line.trim();
      if (seen.has(trimmed)) return false;
      seen.add(trimmed);
      return true;
    }).join("\n");
  };

  const getLineStats = () => {
    const lines = text.split("\n").map(line => line.trim()).filter(Boolean);
    const unique = new Set(lines);
    return {
      original: lines.length,
      unique: unique.size,
    };
  };

  const getTopDuplicateLines = () => {
    const freq = {};
    text.split("\n").forEach(line => {
      const trimmed = line.trim();
      if (trimmed)
        freq[trimmed] = (freq[trimmed] || 0) + 1;
    });
    return Object.entries(freq)
      .filter(([_, count]) => count > 1)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  };

  const uniqueText = getUniqueLines();
  const { original, unique } = getLineStats();

  const handleCopy = () => {
    navigator.clipboard.writeText(uniqueText);
    alert("Output copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([uniqueText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `no-duplicate-lines-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="tool-container">
      <h2>Remove Duplicate Lines</h2>

      {/* Input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text with duplicate lines..."
        rows={8}
        className="form-control mb-3"
      ></textarea>

      {/* Output */}
      <div className="output-box p-3 border rounded mb-3 bg-light">
        <p><strong>Original Lines:</strong> {original}</p>
        <p><strong>Unique Lines:</strong> {unique}</p>

        {text.trim() && getTopDuplicateLines().length > 0 && (
          <>
            <p><strong>Top 5 Duplicate Lines:</strong></p>
            <ul>
              {getTopDuplicateLines().map(([line, count], i) => (
                <li key={i}>
                  "{line}" — {count} times
                </li>
              ))}
            </ul>
          </>
        )}

        <p><strong>Output:</strong></p>
        <pre
          className="border p-2 bg-white rounded"
          style={{ whiteSpace: "pre-wrap", minHeight: "100px" }}
          aria-label="Output text"
        >
          {uniqueText}
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

export default RemoveDuplicateLines;
