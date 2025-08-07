import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const RemovePunctuation = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const removePunct = () => {
    setResult(text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"\[\]'?<>@+|\\]/g, ""));
  };

  return (
    <ToolWrapper
      title="Remove Punctuation"
      description="Strip all punctuation marks from your text instantly."
      inputValue={text}
      onInputChange={(e) => setText(e.target.value)}
      onSubmit={removePunct}
      result={result}
      buttonLabel="Remove Punctuation"
      seo={{
        title: "Remove Punctuation - Clean Punctuation From Text",
        description:
          "Free online tool to remove all punctuation from your text. Useful for data preprocessing and text analysis.",
        keywords:
          "remove punctuation, text cleaner, punctuation remover, online tool",
        faq: [
          {
            q: "What symbols are removed?",
            a: "It removes commas, periods, quotes, dashes, and other common punctuation.",
          },
          {
            q: "Can I copy the cleaned text easily?",
            a: "Yes, use the copy button after converting.",
          },
        ],
      }}
    />
  );
};

export default RemovePunctuation;
