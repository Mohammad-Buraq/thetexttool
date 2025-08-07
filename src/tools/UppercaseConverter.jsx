import ToolWrapper from "../components/ToolWrapper";
import { useState } from "react";

export default function UppercaseConverter() {
  const [text, setText] = useState("");
  const output = text.toUpperCase();

  return (
    <ToolWrapper
      title="Uppercase Converter"
      inputValue={text}
      setInputValue={setText}
      outputValue={output}
    />
  );
}