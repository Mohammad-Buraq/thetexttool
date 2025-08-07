import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

function UppercaseConverter() {
  const [text, setText] = useState("");
  const converted = text.toUpperCase();

  const handleCopy = () => navigator.clipboard.writeText(converted);
  const handleDownload = () => {
    const blob = new Blob([converted], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "uppercase.txt";
    link.click();
  };

  return (
    <ToolWrapper
      title="Uppercase Converter"
      description="Convert any text into UPPERCASE instantly. Great for emphasis and formatting."
      inputLabel="Enter your text below:"
      outputLabel="Uppercase Text:"
      input={
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="6"
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
        />
      }
      output={
        <textarea
          value={converted}
          readOnly
          rows="6"
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
        />
      }
      buttons={
        <>
          <button onClick={handleCopy} className="bg-blue-600 px-4 py-2 rounded-md">Copy</button>
          <button onClick={handleDownload} className="bg-green-600 px-4 py-2 rounded-md">Download</button>
          <button onClick={() => setText("")} className="bg-red-600 px-4 py-2 rounded-md">Clear</button>
        </>
      }
      content={
        <>
          <p><strong>What is an Uppercase Converter?</strong></p>
          <p>This tool changes your text into all uppercase letters. Ideal for headlines, alerts, or formatting your writing for style.</p>
          <p><strong>Keywords:</strong> uppercase converter, change text to uppercase, online caps tool</p>
        </>
      }
    />
  );
}

export default UppercaseConverter;
