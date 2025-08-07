import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const Base64Decode = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => {
    try {
      const decoded = decodeURIComponent(escape(atob(text)));
      setOutput(decoded);
    } catch {
      setOutput("Decoding error. Please enter valid Base64 input.");
    }
  };

  return (
    <ToolWrapper
      title="Base64 Decode Text"
      description="Decode Base64-encoded text back into human-readable form. Useful for decoding web, API, and encrypted data."
      inputValue={text}
      onInputChange={(e) => setText(e.target.value)}
      outputValue={output}
      onConvert={handleConvert}
      convertLabel="Decode from Base64"
      toolName="Base64Decode"
    />
  );
};

export default Base64Decode;
