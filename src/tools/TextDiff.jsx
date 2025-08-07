// src/tools/TextCompare.jsx
import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

function TextCompare() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diff, setDiff] = useState("");

  const compareTexts = (a, b) => {
    if (!a && !b) return "";
    if (a === b) return "Both texts are identical.";
    return "Texts are different.";
  };

  const handleCompare = (value, setFn, other, isFirst) => {
    setFn(value);
    const result = compareTexts(isFirst ? value : other, isFirst ? other : value);
    setDiff(result);
  };

  return (
    <ToolWrapper
      title="Text Compare Tool"
      description="Easily compare two blocks of text for differences. Useful for spotting changes between versions."
      keywords="text compare, diff tool, compare strings online"
    >
      <textarea
        placeholder="Enter first text..."
        value={text1}
        onChange={(e) => handleCompare(e.target.value, setText1, text2, true)}
        className="tool-textarea"
      ></textarea>

      <textarea
        placeholder="Enter second text..."
        value={text2}
        onChange={(e) => handleCompare(e.target.value, setText2, text1, false)}
        className="tool-textarea"
      ></textarea>

      <textarea
        placeholder="Comparison result..."
        value={diff}
        readOnly
        className="tool-textarea"
      ></textarea>
    </ToolWrapper>
  );
}

export default TextCompare;
