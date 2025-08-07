import React, { useState } from "react";
import ToolWrapper from "../ToolWrapper";
import { copyToClipboard, downloadText } from "../utils";

const emojiMap = {
  happy: "😊", sad: "😢", love: "❤️", fire: "🔥",
  cool: "😎", wow: "😮", angry: "😡", star: "⭐", heart: "💖"
};

const TextToEmoji = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const convertToEmoji = () => {
    let result = input;
    for (const word in emojiMap) {
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      result = result.replace(regex, emojiMap[word]);
    }
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="Text to Emoji Converter"
      description="Turn emotional words in your text into emojis! This fun tool replaces keywords like 'happy' or 'love' with relevant emojis."
    >
      <textarea
        placeholder="Type or paste text (e.g., I'm feeling happy and cool today)..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="tool-textarea"
      />
      <div className="tool-button-group">
        <button onClick={convertToEmoji}>Convert</button>
        <button onClick={() => copyToClipboard(output)}>Copy Output</button>
        <button onClick={() => downloadText(output, "emoji-text.txt")}>Download Output</button>
        <button onClick={() => { setInput(""); setOutput(""); }}>Clear</button>
      </div>
      <textarea
        placeholder="Emoji-enhanced text will appear here..."
        value={output}
        readOnly
        className="tool-textarea"
      />
    </ToolWrapper>
  );
};

export default TextToEmoji;
