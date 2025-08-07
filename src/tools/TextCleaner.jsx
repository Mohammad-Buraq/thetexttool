import ToolWrapper from "../components/ToolWrapper";
import { useState } from "react";

export default function TextCleaner() {
  const [text, setText] = useState("");
  const output = text.replace(/[^\x20-\x7E]/g, "");

  return (
    <ToolWrapper
      title="Text Cleaner"
      inputValue={text}
      setInputValue={setText}
      outputValue={output}
    />
  );
}