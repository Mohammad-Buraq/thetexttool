import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

function WordCounter() {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const handleCopy = () => navigator.clipboard.writeText(wordCount.toString());
  const handleDownload = () => {
    const blob = new Blob([wordCount.toString()], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "word-count.txt";
    link.click();
  };

  return (
    <ToolWrapper
      title="Word Counter"
      description="Quickly count the number of words in your text. Ideal for essays, social media posts, or character-limited content."
      inputLabel="Enter your text below:"
      outputLabel="Word Count:"
      input={
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="6"
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
        />
      }
      output={
        <div className="p-3 rounded-md bg-gray-800 border border-gray-700">{wordCount}</div>
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
          <p><strong>What is a Word Counter?</strong></p>
          <p>This tool helps you calculate the number of words in your content, whether you're writing a blog post, an assignment, or a tweet. Simply paste your text and get instant results!</p>
          <p><strong>Keywords:</strong> word counter, count words, online word counter, SEO writing tool</p>
        </>
      }
    />
  );
}

export default WordCounter;
