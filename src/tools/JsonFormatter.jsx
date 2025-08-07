import React, { useState } from "react";
import ToolWrapper from "../ToolWrapper";
import { copyToClipboard, downloadText } from "../utils";

const JSONFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
    } catch (e) {
      setOutput("❌ Invalid JSON");
    }
  };

  return (
    <ToolWrapper
      title="JSON Formatter"
      description="Format your raw or minified JSON into a clean, readable structure. Paste your JSON and click Format to beautify it instantly."
    >
      <textarea
        placeholder="Paste raw JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="tool-textarea"
      />
      <div className="tool-button-group">
        <button onClick={formatJSON}>Format JSON</button>
        <button onClick={() => copyToClipboard(output)}>Copy Output</button>
        <button onClick={() => downloadText(output, "formatted.json")}>
          Download Output
        </button>
        <button onClick={() => { setInput(""); setOutput(""); }}>Clear</button>
      </div>
      <textarea
        placeholder="Formatted output will appear here..."
        value={output}
        readOnly
        className="tool-textarea"
      />
    </ToolWrapper>
  );
};

export default JSONFormatter;
