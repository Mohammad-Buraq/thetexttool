import React, { useState } from "react";
import ToolWrapper from "../ToolWrapper";
import { copyToClipboard, downloadText } from "../utils";

const RemoveLineBreaks = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const removeBreaks = () => {
    const result = input.replace(/[\r\n]+/g, " ");
    setOutput(result);
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
