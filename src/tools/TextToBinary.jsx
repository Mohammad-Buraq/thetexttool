// TextToBinary.js
import React, { useState } from "react";
import ToolWrapper from "../ToolWrapper";
import { copyToClipboard, downloadOutput } from "../../utils";

function TextToBinary() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => {
    const binary = input
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
    setOutput(binary);
  };

  return (
    <ToolWrapper
      title="Text to Binary Converter"
      description="Convert plain text into binary code. Useful for encoding messages and data."
    >
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to convert to binary..."
        className="tool-input"
      />
      <div className="tool-buttons">
        <button onClick={handleConvert}>Convert</button>
        <button onClick={() => copyToClipboard(output)}>Copy Output</button>
        <button onClick={() => downloadOutput(output, "text-to-binary.txt")}>
          Download Output
        </button>
        <button onClick={() => setOutput("")}>Clear Output</button>
      </div>
      <textarea
        value={output}
        readOnly
        className="tool-output"
        placeholder="Binary output will appear here..."
      />

      <div className="tool-seo">
        <h2>Text to Binary – ASCII Converter</h2>
        <p>
          This tool converts each character of your input text into its corresponding binary
          ASCII representation.
        </p>
        <h3>Example</h3>
        <p><b>Input:</b> Hi → <b>Output:</b> 01001000 01101001</p>
        <h3>Keywords</h3>
        <p>text to binary, ascii to binary, binary encoder, text encoder online, binary translator</p>
      </div>
    </ToolWrapper>
  );
}

export default TextToBinary;
