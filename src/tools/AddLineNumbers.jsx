import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

export default function AddLineNumbers() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const addNumbers = () => {
    const lines = input.split("\n");
    const numbered = lines.map((line, i) => `${i + 1}. ${line}`).join("\n");
    setOutput(numbered);
  };

  return (
    <ToolWrapper
      title="Add Line Numbers"
      description="Add line numbers to each line of your text."
      inputValue={input}
      outputValue={output}
      onInputChange={(e) => setInput(e.target.value)}
      onConvert={addNumbers}
      convertLabel="Add Numbers"
    />
  );
}
