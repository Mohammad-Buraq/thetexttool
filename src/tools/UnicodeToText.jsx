import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const UnicodeToText = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => {
    try {
      const decoded = text.replace(/\\u[\dA-Fa-f]{4}/g, (match) =>
        String.fromCharCode(parseInt(match.replace("\\u", ""), 16))
      );
      setOutput(decoded);
    } catch {
      setOutput("Invalid Unicode input.");
    }
  };

  return (
    <ToolWrapper
      title="Unicode to Text Converter"
      description="Convert Unicode escape sequences (\\uXXXX) back into plain text. Useful for decoding encoded content from JSON, APIs, or source code."
      inputValue={text}
      onInputChange={(e) => setText(e.target.value)}
      outputValue={output}
      onConvert={handleConvert}
      convertLabel="Convert to Text"
      toolName="UnicodeToText"
    />
  );
};

export default UnicodeToText;
