import ToolWrapper from "../components/ToolWrapper";
import { useState } from "react";

export default function RemoveLineBreaks() {
  const [text, setText] = useState("");
  const output = text.replace(/\n/g, " ");

  return (
    <ToolWrapper
      title="Remove Line Breaks"
      inputValue={text}
      setInputValue={setText}
      outputValue={output}
    />
  );
}