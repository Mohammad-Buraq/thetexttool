import ToolWrapper from "../components/ToolWrapper";
import { useState } from "react";

export default function ReverseText() {
  const [text, setText] = useState("");
  const output = text.split("").reverse().join("");

  return (
    <ToolWrapper
      title="Reverse Text"
      inputValue={text}
      setInputValue={setText}
      outputValue={output}
    />
  );
}