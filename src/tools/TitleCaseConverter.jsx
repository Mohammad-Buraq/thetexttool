import React, { useState } from "react";

function TitleCaseConverter() {
  const [text, setText] = useState("");

  const toSentenceCase = (txt) =>
    txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();

  const toTitleCase = (txt) =>
    txt
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const handleConvert = (type) => {
    let converted = "";
    switch (type) {
      case "upper":
        converted = text.toUpperCase();
        break;
      case "lower":
        converted = text.toLowerCase();
        break;
      case "title":
        converted = toTitleCase(text);
        break;
      case "sentence":
        converted = toSentenceCase(text);
        break;
      default:
        converted = text;
    }
    setText(converted);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">📝 Title Case Converter</h1>
      <textarea
        className="w-full h-40 p-4 border rounded bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text..."
      ></textarea>
      <div className="flex flex-wrap gap-3 mt-4">
        <button onClick={() => handleConvert("upper")} className="btn">UPPERCASE</button>
        <button onClick={() => handleConvert("lower")} className="btn">lowercase</button>
        <button onClick={() => handleConvert("title")} className="btn">Title Case</button>
        <button onClick={() => handleConvert("sentence")} className="btn">Sentence case</button>
      </div>
    </div>
  );
}

export default TitleCaseConverter;
