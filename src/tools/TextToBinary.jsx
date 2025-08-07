import ToolWrapper from "../components/ToolWrapper";
import { useState } from "react";

export default function TextToBinary() {
  const [text, setText] = useState("");
  const output = text
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");

  return (
    <ToolWrapper
      title="Text to Binary"
      inputValue={text}
      setInputValue={setText}
      outputValue={output}
    />
  );
}