import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

export default function CapitalizeWords() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const capitalize = () => {
    const result = input
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="Capitalize Each Word"
      description="Capitalize the first letter of every word in your text."
      inputValue={input}
      outputValue={output}
      onInputChange={(e) => setInput(e.target.value)}
      onConvert={capitalize}
      convertLabel="Capitalize"
    />
  );
}
