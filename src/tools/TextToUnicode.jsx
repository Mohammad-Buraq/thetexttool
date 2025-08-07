import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const TextToUnicode = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => {
    const result = [...text]
      .map((char) => "\\u" + char.charCodeAt(0).toString(16).padStart(4, "0"))
      .join("");
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="Text to Unicode Converter"
      description="Convert plain text into Unicode escape sequences (\\uXXXX). Useful for encoding text for programming, JSON, and APIs."
      inputValue={text}
      onInputChange={(e) => setText(e.target.value)}
      outputValue={output}
      onConvert={handleConvert}
      convertLabel="Convert to Unicode"
      toolName="TextToUnicode"
    />
  );
};

export default TextToUnicode;
