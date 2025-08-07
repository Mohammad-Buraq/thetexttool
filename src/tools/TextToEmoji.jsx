import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const emojiMap = {
  happy: "😊", sad: "😢", love: "❤️", fire: "🔥", cool: "😎", wow: "😮",
  angry: "😡", star: "⭐", heart: "💖", laugh: "😂", smile: "😄", cry: "😭",
  sleep: "😴", music: "🎵", dance: "💃", food: "🍔", pizza: "🍕", coffee: "☕",
  cat: "🐱", dog: "🐶", sun: "☀️", moon: "🌙", cloud: "☁️", rain: "🌧️",
  thunder: "⚡", snow: "❄️", tree: "🌳", flower: "🌸", rose: "🌹", cake: "🎂",
  gift: "🎁", party: "🥳", balloon: "🎈", book: "📚", phone: "📱", computer: "💻",
  car: "🚗", bike: "🚲", bus: "🚌", airplane: "✈️", train: "🚆", money: "💰",
  dollar: "💵", idea: "💡", time: "⏰", clock: "🕒", thumbs: "👍", clap: "👏",
  ok: "👌", no: "🙅", yes: "🙆", good: "👍", bad: "👎", tired: "🥱",
  sick: "🤒", strong: "💪", weak: "😩", shocked: "😲", bored: "🥱",
  excited: "🤩", nervous: "😬", proud: "😌", scared: "😱", confused: "😕",
  kiss: "😘", hug: "🤗", wink: "😉", cold: "🥶", hot: "🥵", run: "🏃",
  walk: "🚶", jump: "🤸", swim: "🏊", beach: "🏖️", mountain: "🏔️",
  city: "🏙️", loveyou: "😍", celebrate: "🎉", explosion: "💥", magic: "✨",
  starry: "🌟", sleepy: "🥱", shy: "😳", angryface: "😠", devil: "😈",
  angel: "😇", alien: "👽", robot: "🤖", skull: "💀", poop: "💩", rainbow: "🌈"
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    alert("Output copied to clipboard!");
  });
};

const downloadText = (text, filename) => {
  const element = document.createElement("a");
  const file = new Blob([text], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
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
      description="Turn emotional words in your text into emojis! This fun tool replaces words like 'happy', 'love', or 'cool' with emojis."
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
