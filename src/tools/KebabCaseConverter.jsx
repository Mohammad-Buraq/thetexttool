import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const KebabCaseConverter = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const convertToKebabCase = () => {
    const kebab = text
      .toLowerCase()
      .match(/\w+/g)
      ?.join("-") || "";
    setResult(kebab);
  };

  return (
    <ToolWrapper
      title="Kebab Case Converter"
      description="Convert your text into kebab-case (lowercase-hyphenated) style."
      inputValue={text}
      onInputChange={(e) => setText(e.target.value)}
      onSubmit={convertToKebabCase}
      result={result}
      buttonLabel="Convert to kebab-case"
      seo={{
        title: "Kebab Case Converter - Convert Text to kebab-case Format",
        description:
          "Free tool to convert strings to kebab-case (hyphen-separated lowercase) for URLs, CSS classes, and more.",
        keywords: "kebab case, kebab-case converter, css case, hyphen text",
        faq: [
          {
            q: "Where is kebab-case used?",
            a: "It's common in URLs, CSS class names, and web development.",
          },
          {
            q: "Is kebab-case the same as lowercase?",
            a: "Not quite — it's lowercase words joined by hyphens.",
          },
        ],
      }}
    />
  );
};

export default KebabCaseConverter;
