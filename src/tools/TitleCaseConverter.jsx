// src/tools/TitleCaseConverter.jsx
import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";
import {
  copyToClipboard,
  downloadOutput,
  clearAllFields,
} from "../utils/toolUtils";

function TitleCaseConverter() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const convertToTitleCase = (value) => {
    setText(value);
    const result = value
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="Title Case Converter"
      description="Convert any sentence into proper title case. Capitalize each word in your sentence."
      keywords="title case, capitalize words, convert to title case"
    >
      <textarea
        placeholder="Enter text to convert..."
        value={text}
        onChange={(e) => convertToTitleCase(e.target.value)}
        className="tool-textarea"
      ></textarea>

      <textarea
        placeholder="Output will appear here..."
        value={output}
        readOnly
        className="tool-textarea"
      ></textarea>

      <div className="tool-button-group">
        <button onClick={() => copyToClipboard(output)}>Copy Output</button>
        <button onClick={() => downloadOutput(output, "title-case.txt")}>
          Download Output
        </button>
        <button onClick={() => clearAllFields(setText, setOutput)}>Clear</button>
      </div>
    </ToolWrapper>
  );
}

export default TitleCaseConverter;
