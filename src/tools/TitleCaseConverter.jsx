// src/tools/TitleCaseConverter.jsx
import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const downloadOutput = (content, filename) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const clearAllFields = () => {
    setText("");
    setOutput("");
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
        <button onClick={clearAllFields}>Clear</button>
      </div>
    </ToolWrapper>
  );
}

export default TitleCaseConverter;
