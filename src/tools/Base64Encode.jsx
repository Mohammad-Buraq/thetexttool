import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const Base64Encode = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => {
    try {
      const encoded = btoa(unescape(encodeURIComponent(text)));
      setOutput(encoded);
    } catch {
      setOutput("Encoding error.");
    }
  };

  return (
    <ToolWrapper
      title="Base64 Encode Text"
      description="Encode text into Base64 format. Useful for encoding data for web, APIs, JSON, and URL-safe transfers."
      inputValue={text}
      onInputChange={(e) => setText(e.target.value)}
      outputValue={output}
      onConvert={handleConvert}
      convertLabel="Encode to Base64"
      toolName="Base64Encode"
    />
  );
};

export default Base64Encode;
