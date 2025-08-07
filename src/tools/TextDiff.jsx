import ToolWrapper from "../components/ToolWrapper";
import { useState } from "react";

export default function TextDiff() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const output = text
    .split("\n")
    .filter((line) => !text2.split("\n").includes(line))
    .join("\n");

  return (
    <div className="space-y-4">
      <ToolWrapper
        title="Text Diff - Input 1"
        inputValue={text}
        setInputValue={setText}
        outputValue=""
      />
      <ToolWrapper
        title="Text Diff - Input 2"
        inputValue={text2}
        setInputValue={setText2}
        outputValue={output}
      />
    </div>
  );
}