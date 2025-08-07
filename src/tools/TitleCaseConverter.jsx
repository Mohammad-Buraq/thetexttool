import ToolWrapper from "../components/ToolWrapper";
import { useState } from "react";

export default function TitleCaseConverter() {
  const [text, setText] = useState("");
  const output = text.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  return (
    <ToolWrapper
      title="Title Case Converter"
      inputValue={text}
      setInputValue={setText}
      outputValue={output}
    />
  );
}