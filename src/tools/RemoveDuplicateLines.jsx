import ToolWrapper from "../components/ToolWrapper";
import { useState } from "react";

export default function RemoveDuplicateLines() {
  const [text, setText] = useState("");
  const output = [...new Set(text.split("\n"))].join("\n");

  return (
    <ToolWrapper
      title="Remove Duplicate Lines"
      inputValue={text}
      setInputValue={setText}
      outputValue={output}
    />
  );
}
