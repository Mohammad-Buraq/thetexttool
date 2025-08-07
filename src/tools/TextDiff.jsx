import React, { useState } from "react";

function TextDiff() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [diffResult, setDiffResult] = useState("");

  const compareTexts = () => {
    const aLines = textA.split("\n");
    const bLines = textB.split("\n");
    const maxLength = Math.max(aLines.length, bLines.length);
    const diff = [];

    for (let i = 0; i < maxLength; i++) {
      const a = aLines[i] || "";
      const b = bLines[i] || "";
      if (a !== b) {
        diff.push(`Line ${i + 1}:\n- A: ${a}\n+ B: ${b}\n`);
      }
    }

    setDiffResult(diff.length ? diff.join("\n") : "No differences found.");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(diffResult);
  };

  const downloadOutput = () => {
    const element = document.createElement("a");
    const file = new Blob([diffResult], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text-diff.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="tool-container">
      <h2>Text Diff Tool</h2>

      <textarea
        value={textA}
        onChange={(e) => setTextA(e.target.value)}
        placeholder="Enter Text A..."
        className="input-box"
        rows={8}
      />
      <textarea
        value={textB}
        onChange={(e) => setTextB(e.target.value)}
        placeholder="Enter Text B..."
        className="input-box"
        rows={8}
      />

      <button onClick={compareTexts}>Compare</button>

      {diffResult && (
        <>
          <h3>Output</h3>
          <textarea
            value={diffResult}
            readOnly
            className="output-box"
            rows={10}
          />

          <div className="btn-group">
            <button onClick={copyToClipboard}>Copy Output</button>
            <button onClick={downloadOutput}>Download Output</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TextDiff;
