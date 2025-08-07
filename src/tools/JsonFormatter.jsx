import ToolWrapper from "../components/ToolWrapper";
import { useState } from "react";

export default function JsonFormatter() {
  const [text, setText] = useState("");
  let output = "";

  try {
    output = JSON.stringify(JSON.parse(text), null, 2);
  } catch {
    output = "Invalid JSON";
  }

  return (
    <ToolWrapper
      title="JSON Formatter"
      inputValue={text}
      setInputValue={setText}
      outputValue={output}
    />
  );
}