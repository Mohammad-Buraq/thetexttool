// src/tools/ReverseText.jsx
import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

function ReverseText() {
  const [text, setText] = useState("");
  const [reversed, setReversed] = useState("");

  const handleReverse = (value) => {
    setText(value);
    setReversed(value.split("").reverse().join(""));
  };

  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Copied to clipboard!");
    }
  };

  const downloadOutput = (text, filename) => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const clearAllFields = () => {
    setText("");
    setReversed("");
  };

  return (
    <ToolWrapper
      title="Reverse Text"
      description="Reverse any text, sentence, or paragraph. Easily flip your text backwards online."
      keywords="reverse text, flip text, backwards text converter"
    >
      <textarea
        placeholder="Enter text to reverse..."
        value={text}
        onChange={(e) => handleReverse(e.target.value)}
        className="tool-textarea"
      ></textarea>

      <textarea
        placeholder="Reversed text will appear here..."
        value={reversed}
        readOnly
        className="tool-textarea"
      ></textarea>

      <div className="tool-button-group">
        <button onClick={() => copyToClipboard(reversed)}>Copy Output</button>
        <button onClick={() => downloadOutput(reversed, "reversed-text.txt")}>
          Download Output
        </button>
        <button onClick={clearAllFields}>Clear</button>
      </div>
    </ToolWrapper>
  );
}

export default ReverseText;
