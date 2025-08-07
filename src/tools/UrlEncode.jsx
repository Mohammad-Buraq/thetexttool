import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const UrlEncode = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => {
    const encoded = encodeURIComponent(text);
    setOutput(encoded);
  };

  return (
    <ToolWrapper
      title="URL Encode Text"
      description="Convert text into a URL-safe format using percent-encoding. Useful for web development, query parameters, and redirects."
      inputValue={text}
      onInputChange={(e) => setText(e.target.value)}
      outputValue={output}
      onConvert={handleConvert}
      convertLabel="Encode URL"
      toolName="UrlEncode"
    />
  );
};

export default UrlEncode;
