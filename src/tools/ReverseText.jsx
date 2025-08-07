// src/tools/ReverseText.jsx
import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";
import {
  copyToClipboard,
  downloadOutput,
  clearAllFields,
} from "../utils/toolUtils";

function ReverseText() {
  const [text, setText] = useState("");
  const [reversed, setReversed] = useState("");

  const handleReverse = (value) => {
    setText(value);
    setReversed(value.split("").reverse().join(""));
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
        <button onClick={() => clearAllFields(setText, setReversed)}>
          Clear
        </button>
      </div>
    </ToolWrapper>
  );
}

export default ReverseText;
