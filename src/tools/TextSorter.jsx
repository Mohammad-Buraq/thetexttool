import ToolWrapper from "../components/ToolWrapper";
import { useState } from "react";

export default function TextSorter() {
  const [text, setText] = useState("");
  const output = text.split("\n").sort().join("\n");

  return (
    <ToolWrapper
      title="Text Sorter"
      inputValue={text}
      setInputValue={setText}
      outputValue={output}
    />
  );
}