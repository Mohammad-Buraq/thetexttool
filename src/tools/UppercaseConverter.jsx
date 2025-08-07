import React, { useState } from "react";

function UppercaseConverter() {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const handleConvert = () => {
    setConvertedText(text.toUpperCase());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(convertedText);
  };

  const handleDownload = () => {
    const blob = new Blob([convertedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "uppercase_output.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="tool-container">
      <h2>Uppercase Converter</h2>
      <textarea
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        className="input-box"
      ></textarea>
      <button onClick={handleConvert}>Convert to UPPERCASE</button>

      <h3>Output</h3>
      <textarea
        value={convertedText}
        readOnly
        rows={8}
        className="output-box"
      ></textarea>
      <div className="button-group">
        <button onClick={handleCopy}>Copy Output</button>
        <button onClick={handleDownload}>Download Output</button>
      </div>
    </div>
  );
}

export default UppercaseConverter;
