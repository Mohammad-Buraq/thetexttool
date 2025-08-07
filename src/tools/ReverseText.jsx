import React, { useState } from "react";

function ReverseText() {
  const [text, setText] = useState("");
  const [reversedText, setReversedText] = useState("");

  const handleReverse = () => {
    const reversed = text.split("").reverse().join("");
    setReversedText(reversed);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(reversedText);
  };

  const downloadText = () => {
    const blob = new Blob([reversedText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "reversed_text.txt";
    link.click();
  };

  return (
    <div className="tool-container">
      <h2>Reverse Text</h2>
      <textarea
        rows="8"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={handleReverse}>Reverse</button>

      {reversedText && (
        <div className="output-section">
          <h3>Reversed Output</h3>
          <textarea rows="8" value={reversedText} readOnly></textarea>
          <div className="button-group">
            <button onClick={copyToClipboard}>Copy Output</button>
            <button onClick={downloadText}>Download Output</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReverseText;
