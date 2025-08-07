import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const CamelCaseConverter = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const convertToCamelCase = () => {
    const words = text.toLowerCase().match(/\w+/g);
    if (!words) return setResult("");
    const camel = words
      .map((word, i) =>
        i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
    setResult(camel);
  };

  return (
    <ToolWrapper
      title="Camel Case Converter"
      description="Convert your text into camelCase style instantly."
      inputValue={text}
      onInputChange={(e) => setText(e.target.value)}
      onSubmit={convertToCamelCase}
      result={result}
      buttonLabel="Convert to camelCase"
      seo={{
        title: "Camel Case Converter - Convert Text to camelCase Format",
        description:
          "Easily convert any string into camelCase using this free online tool. Great for coding and formatting identifiers.",
        keywords: "camel case, camelCase, text converter, code formatting",
        faq: [
          {
            q: "What is camelCase?",
            a: "camelCase starts with a lowercase letter and each following word is capitalized without spaces.",
          },
          {
            q: "Where is camelCase used?",
            a: "It's common in JavaScript and other programming languages for variable names.",
          },
        ],
      }}
    />
  );
};

export default CamelCaseConverter;
