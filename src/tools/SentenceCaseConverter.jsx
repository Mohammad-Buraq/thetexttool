import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const SentenceCaseConverter = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const convertToSentenceCase = () => {
    const formatted = text
      .toLowerCase()
      .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
    setResult(formatted);
  };

  return (
    <ToolWrapper
      title="Sentence Case Converter"
      description="Convert your text to proper sentence case quickly."
      inputValue={text}
      onInputChange={(e) => setText(e.target.value)}
      onSubmit={convertToSentenceCase}
      result={result}
      buttonLabel="Convert to Sentence Case"
      seo={{
        title: "Sentence Case Converter - Convert Text to Sentences",
        description:
          "Free online tool to convert text into sentence case. Automatically capitalizes first letters and corrects casing.",
        keywords:
          "sentence case, capitalize sentences, convert text, sentence formatter",
        faq: [
          {
            q: "What is sentence case?",
            a: "Sentence case means the first letter of each sentence is capitalized, the rest lowercase.",
          },
          {
            q: "Is this tool case-sensitive?",
            a: "It converts the whole text to sentence case regardless of original casing.",
          },
        ],
      }}
    />
  );
};

export default SentenceCaseConverter;
