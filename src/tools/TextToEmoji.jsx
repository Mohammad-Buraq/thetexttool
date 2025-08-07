import ToolWrapper from "../components/ToolWrapper";
import { useState } from "react";

const emojiMap = {
  happy: "😊", sad: "😢", love: "❤️", fire: "🔥", cat: "🐱", dog: "🐶"
};

function toEmoji(text) {
  return text.split(" ").map((word) => emojiMap[word.toLowerCase()] || word).join(" ");
}

export default function TextToEmoji() {
  const [text, setText] = useState("");
  const output = toEmoji(text);

  return (
    <ToolWrapper
      title="Text to Emoji"
      inputValue={text}
      setInputValue={setText}
      outputValue={output}
    />
  );
}