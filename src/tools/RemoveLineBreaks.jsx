import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const RemoveLineBreaks = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const removeBreaks = () => {
    const result = input.replace(/[\r\n]+/g, " ");
    setOutput(result);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Output copied to clipboard!");
    } catch (err) {
      alert("Failed to copy!");
    }
  };

  const downloadText = (text, filename) => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <ToolWrapper
      title="Remove Line Breaks"
      description="This tool removes all newlines and line breaks from your text. Ideal for compacting paragraphs or pasting into single-line input fields."
    >
      <textarea
        placeholder="Paste text with line breaks..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="tool-textarea"
      />
      <div className="tool-button-group">
        <button onClick={removeBreaks}>Remove Breaks</button>
        <button onClick={() => copyToClipboard(output)}>Copy Output</button>
        <button onClick={() => downloadText(output, "no-breaks.txt")}>Download Output</button>
        <button onClick={() => { setInput(""); setOutput(""); }}>Clear</button>
      </div>
      <textarea
        placeholder="Text without line breaks will appear here..."
        value={output}
        readOnly
        className="tool-textarea"
      />
    </ToolWrapper>
  );
};

export default RemoveLineBreaks;
