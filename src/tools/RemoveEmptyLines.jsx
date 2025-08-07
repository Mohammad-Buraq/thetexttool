import ToolWrapper from "../components/ToolWrapper";
import { useState } from "react";

export default function RemoveEmptyLines() {
  const [text, setText] = useState("");
  const output = text
    .split("\n")
    .filter((line) => line.trim() !== "")
    .join("\n");

  return (
    <ToolWrapper
      title="Remove Empty Lines"
      inputValue={text}
      setInputValue={setText}
      outputValue={output}
    />
  );
}