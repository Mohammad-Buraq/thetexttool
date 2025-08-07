import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const RemoveAllSpaces = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const removeSpaces = () => {
    setResult(text.replace(/\s+/g, ""));
  };

  return (
    <ToolWrapper
      title="Remove All Spaces"
      description="Eliminate all white spaces from your text instantly."
      inputValue={text}
      onInputChange={(e) => setText(e.target.value)}
      onSubmit={removeSpaces}
      result={result}
      buttonLabel="Remove Spaces"
      seo={{
        title: "Remove All Spaces - Online Text Space Remover",
        description:
          "Remove all spaces from your text with this simple and free online tool. Perfect for formatting and cleaning data.",
        keywords:
          "remove all spaces, delete white space, text cleaner, space remover",
        faq: [
          {
            q: "Does this tool remove tabs and newlines?",
            a: "No, it only removes regular spaces. Use our text cleaner to remove tabs or newlines.",
          },
          {
            q: "Is my text safe?",
            a: "Yes, all processing happens in your browser.",
          },
        ],
      }}
    />
  );
};

export default RemoveAllSpaces;
