import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const TitleCaseConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const convertToTitleCase = (text) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) =>
        word.length > 0 ? word[0].toUpperCase() + word.slice(1) : ""
      )
      .join(" ");
  };

  const handleInputChange = (value) => {
    setInputValue(value);
    setOutputValue(convertToTitleCase(value));
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(outputValue);
  };

  const handleDownloadOutput = () => {
    const element = document.createElement("a");
    const file = new Blob([outputValue], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "titlecase.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <ToolWrapper
      title="Title Case Converter"
      description="Convert your text to Title Case (capitalize the first letter of each word)."
      inputValue={inputValue}
      outputValue={outputValue}
      onInputChange={handleInputChange}
      onCopyOutput={handleCopyOutput}
      onDownloadOutput={handleDownloadOutput}
    />
  );
};

export default TitleCaseConverter;
