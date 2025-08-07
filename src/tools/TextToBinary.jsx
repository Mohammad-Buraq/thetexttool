import React, { useState } from "react";

function TextToBinary() {
  const [inputText, setInputText] = useState("");
  const [binaryOutput, setBinaryOutput] = useState("");

  const convertToBinary = () => {
    const binary = inputText
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
    setBinaryOutput(binary);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(binaryOutput);
  };

  const downloadOutput = () => {
    const blob = new Blob([binaryOutput], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "binary-output.txt";
    link.click();
  };

  return (
    <div className="tool-container">
      <h2>Text to Binary</h2>

      <textarea
        className="input-box"
        rows={10}
        placeholder="Enter text to convert to binary..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button onClick={convertToBinary}>Convert</button>

      <textarea
        className="output-box"
        rows={10}
        placeholder="Binary output will appear here..."
        value={binaryOutput}
        readOnly
      />

      {binaryOutput && (
        <div className="output-actions">
          <button onClick={copyToClipboard}>Copy Output</button>
          <button onClick={downloadOutput}>Download Output</button>
        </div>
      )}
    </div>
  );
}

export default TextToBinary;
