import React, { useState } from "react";
import ToolWrapper from "../ToolWrapper";
import { copyToClipboard, downloadText } from "../utils";

const TextCleaner = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const cleanText = () => {
    let cleaned = input
      .replace(/\s+/g, " ") // collapse spaces
      .replace(/^\s+|\s+$/g, ""); // trim
    setOutput(cleaned);
  };

  return (
    <ToolWrapper
      title="Text Cleaner"
      description="Clean your text by removing extra spaces, tabs, and unnecessary line breaks. Use this tool to get clean, consistent content."
    >
      <textarea
        placeholder="Paste your messy text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="tool-textarea"
      />
      <div className="tool-button-group">
        <button onClick={cleanText}>Clean Text</button>
        <button onClick={() => copyToClipboard(output)}>Copy Output</button>
        <button onClick={() => downloadText(output, "cleaned.txt")}>Download Output</button>
        <button onClick={() => { setInput(""); setOutput(""); }}>Clear</button>
      </div>
      <textarea
        placeholder="Cleaned text will appear here..."
        value={output}
        readOnly
        className="tool-textarea"
      />
    </ToolWrapper>
  );
};

export default TextCleaner;
