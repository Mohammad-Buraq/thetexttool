import React, { useState } from "react";

function TextToEmoji() {
  const [inputText, setInputText] = useState("");
  const [emojiOutput, setEmojiOutput] = useState("");

  const emojiMap = {
    a: "🅰️", b: "🅱️", c: "🌜", d: "🌛", e: "🎗️", f: "🎏", g: "🌀",
    h: "♓", i: "🎐", j: "🎷", k: "🎋", l: "👢", m: "〽️", n: "🎶",
    o: "⚽", p: "🅿️", q: "🍳", r: "🌱", s: "💲", t: "🌴", u: "⛎",
    v: "✅", w: "🔱", x: "❌", y: "🍸", z: "💤",
    " ": "   "
  };

  const convertToEmoji = () => {
    const result = inputText
      .toLowerCase()
      .split("")
      .map((char) => emojiMap[char] || char)
      .join(" ");
    setEmojiOutput(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emojiOutput);
  };

  const downloadOutput = () => {
    const blob = new Blob([emojiOutput], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "emoji-output.txt";
    link.click();
  };

  return (
    <div className="tool-container">
      <h2>Text to Emoji</h2>

      <textarea
        className="input-box"
        rows={10}
        placeholder="Enter text to convert to emojis..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button onClick={convertToEmoji}>Convert</button>

      <textarea
        className="output-box"
        rows={10}
        placeholder="Emoji output will appear here..."
        value={emojiOutput}
        readOnly
      />

      {emojiOutput && (
        <div className="output-actions">
          <button onClick={copyToClipboard}>Copy Output</button>
          <button onClick={downloadOutput}>Download Output</button>
        </div>
      )}
    </div>
  );
}

export default TextToEmoji;
