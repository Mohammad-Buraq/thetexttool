import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const WordCounter = () => {
  const [text, setText] = useState("");

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  const handleCopy = () => {
    navigator.clipboard.writeText(`Words: ${wordCount}\nCharacters: ${charCount}`);
  };

  const handleDownload = () => {
    const blob = new Blob([`Words: ${wordCount}\nCharacters: ${charCount}`], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "word-count.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <ToolWrapper
      title="Word Counter"
      description="Count words and characters in your text."
      inputValue={text}
      outputValue={`Words: ${wordCount}\nCharacters: ${charCount}`}
      onInputChange={setText}
      onCopyOutput={handleCopy}
      onDownloadOutput={handleDownload}
    />
  );
};

export default WordCounter;