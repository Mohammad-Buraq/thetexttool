import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const TextCleaner = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const cleanText = () => {
    let cleaned = input
      .replace(/\s+/g, " ") // collapse multiple spaces
      .replace(/^\s+|\s+$/g, ""); // trim start and end
    setOutput(cleaned);
  };

  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch((err) => {
        console.error("Failed to copy: ", err);
      });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  };

  const downloadText = (text, filename) => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <button onClick={() => downloadText(output, "cleaned.txt")}>
          Download Output
        </button>
        <button
          onClick={() => {
            setInput("");
            setOutput("");
          }}
        >
          Clear
        </button>
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
