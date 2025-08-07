import React, { useState } from "react";

function TextCleaner() {
  const [text, setText] = useState("");
  const [cleanedText, setCleanedText] = useState("");

  const handleClean = () => {
    let cleaned = text
      .replace(/[^\x20-\x7E]/g, "") // remove non-printable ASCII
      .replace(/\s+/g, " ")         // collapse multiple whitespaces to one space
      .trim();                      // trim leading/trailing whitespace
    setCleanedText(cleaned);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cleanedText);
  };

  const downloadText = () => {
    const blob = new Blob([cleanedText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "cleaned_text.txt";
    link.click();
  };

  return (
    <div className="tool-container">
      <h2>Text Cleaner</h2>
      <textarea
        rows="8"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={handleClean}>Clean</button>

      {cleanedText && (
        <div className="output-section">
          <h3>Cleaned Output</h3>
          <textarea rows="8" value={cleanedText} readOnly></textarea>
          <div className="button-group">
            <button onClick={copyToClipboard}>Copy Output</button>
            <button onClick={downloadText}>Download Output</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TextCleaner;
