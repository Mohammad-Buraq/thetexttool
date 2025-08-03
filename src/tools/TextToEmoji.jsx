import React, { useState } from "react";

const emojiMap = {
  happy: "😊", sad: "😢", love: "❤️", laugh: "😂", smile: "😄", angry: "😠",
  fire: "🔥", cool: "😎", cat: "🐱", dog: "🐶", coffee: "☕", pizza: "🍕",
  sun: "☀️", moon: "🌙", star: "⭐", music: "🎵", dance: "💃", drink: "🥤",
  idea: "💡", phone: "📱", car: "🚗", work: "💼", travel: "✈️",
  rain: "🌧️", snow: "❄️", beach: "🏖️", book: "📚", art: "🎨",
  money: "💰", cake: "🎂", party: "🎉", shopping: "🛍️",
  happybirthday: "🎂", gift: "🎁", email: "📧", camera: "📷", game: "🎮",
  health: "🩺", doctor: "👨‍⚕️", sport: "⚽", basketball: "🏀", soccer: "⚽",
  football: "🏈", film: "🎬", chef: "👨‍🍳"
  // … include hundreds more for pets, food, travel, emotions, etc.
};

function TextToEmoji() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const convertToEmoji = () => {
    const words = input.split(/\s+/);
    const converted = words.map((w) => {
      const clean = w.toLowerCase().replace(/[^\w]/g, "");
      return emojiMap[clean] ? emojiMap[clean] : w;
    });
    setOutput(converted.join(" "));
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Text to Emoji</h1>
      <textarea
        rows={6}
        className="w-full p-4 mb-4 border rounded bg-white dark:bg-gray-800"
        placeholder="Type text like: I love coffee and cats"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={convertToEmoji} className="btn">
        Convert to Emoji
      </button>
      {output && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded text-lg">
          {output}
        </div>
      )}
    </div>
  );
}

export default TextToEmoji;
