import React, { useState } from "react";

const morseMap = {
  a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.",
  g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..",
  m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.",
  s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-",
  y: "-.--", z: "--..", 0: "-----", 1: ".----", 2: "..---",
  3: "...--", 4: "....-", 5: ".....", 6: "-....", 7: "--...",
  8: "---..", 9: "----.", " ": "/"
};

function TextToMorse() {
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");

  const convertToMorse = () => {
    const result = text
      .toLowerCase()
      .split("")
      .map(char => morseMap[char] || "")
      .join(" ");
    setMorse(result);
  };

  const clear = () => {
    setText("");
    setMorse("");
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Text to Morse</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Translate text into Morse code.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <textarea
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 mb-4 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text..."
        ></textarea>

        <div className="flex gap-3 mb-4">
          <button
            onClick={convertToMorse}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Convert
          </button>
          <button
            onClick={clear}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear
          </button>
        </div>

        {morse && (
          <div className="text-sm text-gray-800 dark:text-gray-100 whitespace-pre-wrap break-words">
            <strong>Morse Code:</strong><br />
            {morse}
          </div>
        )}
      </div>
    </div>
  );
}

export default TextToMorse;
