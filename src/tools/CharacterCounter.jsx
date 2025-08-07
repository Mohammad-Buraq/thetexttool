import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

function CharacterCounter() {
  const [text, setText] = useState("");
  const characterCount = text.length;

  const handleCopy = () => navigator.clipboard.writeText(characterCount.toString());
  const handleDownload = () => {
    const blob = new Blob([characterCount.toString()], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "character-count.txt";
    link.click();
  };

  return (
    <ToolWrapper
      title="Character Counter"
      description="Count the number of characters in your text. Useful for Twitter, SMS, or input length validation."
      inputLabel="Enter your text below:"
      outputLabel="Character Count:"
      input={
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="6"
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
        />
      }
      output={
        <div className="p-3 rounded-md bg-gray-800 border border-gray-700">{characterCount}</div>
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
          <p><strong>What is a Character Counter?</strong></p>
          <p>Use this tool to calculate the number of characters in your message, especially for platforms with strict character limits like Twitter or SMS.</p>
          <p><strong>Keywords:</strong> character counter, count characters, text length checker</p>
        </>
      }
    />
  );
}

export default CharacterCounter;
