import ToolWrapper from "../components/ToolWrapper";
import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const output = `${text.length} characters`;

  return (
    <ToolWrapper
      title="Character Counter"
      inputValue={text}
      setInputValue={setText}
      outputValue={output}
    />
  );
}