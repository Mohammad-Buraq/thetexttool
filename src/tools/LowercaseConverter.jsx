import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const LowercaseConverter = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const convertToLowercase = () => {
    setResult(text.toLowerCase());
  };

  return (
    <ToolWrapper
      title="Lowercase Converter"
      description="Convert all your text to lowercase letters instantly."
      inputValue={text}
      onInputChange={(e) => setText(e.target.value)}
      onSubmit={convertToLowercase}
      result={result}
      buttonLabel="Convert to Lowercase"
      seo={{
        title: "Lowercase Converter - Convert Text to Lowercase Instantly",
        description:
          "Use this free online lowercase converter to transform your text into all lowercase letters. Simple, fast, and perfect for formatting.",
        keywords:
          "lowercase converter, text to lowercase, lowercase text tool, convert text online",
        faq: [
          {
            q: "What does the Lowercase Converter do?",
            a: "It converts all characters in your input text to lowercase format.",
          },
          {
            q: "Can I use this tool on mobile?",
            a: "Yes, it's fully mobile-responsive.",
          },
        ],
      }}
    />
  );
};

export default LowercaseConverter;
