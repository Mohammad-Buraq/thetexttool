import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

export default function TextRandomCase() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const randomizeCase = () => {
    const randomized = input
      .split("")
      .map((char) =>
        Math.random() < 0.5 ? char.toLowerCase() : char.toUpperCase()
      )
      .join("");
    setOutput(randomized);
  };

  return (
    <ToolWrapper
      title="Text Case Randomizer"
      description="Randomly changes the case of each character in your text to upper or lower case."
      inputValue={input}
      outputValue={output}
      onInputChange={(e) => setInput(e.target.value)}
      onConvert={randomizeCase}
      convertLabel="Randomize"
    />
  );
}
