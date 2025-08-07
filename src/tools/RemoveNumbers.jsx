import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const RemoveNumbers = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => {
    const result = text.replace(/[0-9]/g, "");
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="Remove Numbers from Text"
      description="Remove all numeric characters (0–9) from your input text. Useful for cleaning data, text preprocessing, and formatting."
      inputValue={text}
      onInputChange={(e) => setText(e.target.value)}
      outputValue={output}
      onConvert={handleConvert}
      convertLabel="Remove Numbers"
      toolName="RemoveNumbers"
    />
  );
};

export default RemoveNumbers;
