import React, { useState } from "react";
import ToolWrapper from "../ToolWrapper";
import { copyToClipboard, downloadText } from "../utils";

const RemoveEmptyLines = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const removeLines = () => {
    const cleaned = input.split("\n").filter(line => line.trim() !== "").join("\n");
    setOutput(cleaned);
  };

  return (
    <ToolWrapper
      title="Remove Empty Lines"
      description="Remove all empty or blank lines from your text. Use this tool to clean up formatted content or code snippets easily."
    >
      <textarea
        placeholder="Paste your text with empty lines..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="tool-textarea"
      />
      <div className="tool-button-group">
        <button onClick={removeLines}>Remove Empty Lines</button>
        <button onClick={() => copyToClipboard(output)}>Copy Output</button>
        <button onClick={() => downloadText(output, "no-empty-lines.txt")}>Download Output</button>
        <button onClick={() => { setInput(""); setOutput(""); }}>Clear</button>
      </div>
      <textarea
        placeholder="Result will appear here..."
        value={output}
        readOnly
        className="tool-textarea"
      />
    </ToolWrapper>
  );
};

export default RemoveEmptyLines;
