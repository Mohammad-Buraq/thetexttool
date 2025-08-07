import React, { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  const charCount = text.length;

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `character-counter-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setText("");
  };

  const charFrequency = () => {
    if (!text) return [];
    const freqMap = {};
    for (let char of text) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }
    return Object.entries(freqMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  };

  return (
    <div className="tool-container">
      <h2>Character Counter</h2>

      {/* Input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
        rows={8}
        className="form-control mb-3"
      ></textarea>

      {/* Output */}
      <div className="output-box p-3 border rounded mb-3 bg-light">
        <p><strong>Total Characters:</strong> {charCount}</p>

        {text.trim() && (
          <>
            <p><strong>Top 5 Characters:</strong></p>
            <ul>
              {charFrequency().map(([char, count], i) => (
                <li key={i}>
                  {char === " " ? "[space]" : char}: {count}
                </li>
              ))}
            </ul>
          </>
        )}

        <p><strong>Output:</strong></p>
        <pre
          className="border p-2 bg-white rounded"
          style={{ whiteSpace: "pre-wrap", minHeight: "100px" }}
          aria-label="Text output"
        >
          {text}
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

export default CharacterCounter;
