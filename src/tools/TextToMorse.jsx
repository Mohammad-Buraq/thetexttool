import React, { useState } from "react";
import ToolWrapper from "../components/ToolWrapper";

const morseMap = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..", 1: ".----", 2: "..---", 3: "...--",
  4: "....-", 5: ".....", 6: "-....", 7: "--...", 8: "---..",
  9: "----.", 0: "-----", " ": "/",
};

function TextToMorse() {
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");

  const convertToMorse = (value) => {
    setText(value);
    const result = value
      .toUpperCase()
      .split("")
      .map((char) => morseMap[char] || "")
      .join(" ");
    setMorse(result);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (err) {
      alert("Failed to copy.");
    }
  };

  const downloadOutput = (text, filename) => {
    const blob = new Blob([text], { type: "text/plain" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  const clearAllFields = () => {
    setText("");
    setMorse("");
  };

  return (
    <ToolWrapper
      title="Text to Morse Code"
      description="Convert text to Morse code online. Perfect for encoding messages in dots and dashes."
      keywords="text to morse, morse code converter, encode to morse"
    >
      <textarea
        placeholder="Enter text to convert to Morse..."
        value={text}
        onChange={(e) => convertToMorse(e.target.value)}
        className="tool-textarea"
      ></textarea>

      <textarea
        placeholder="Morse code output..."
        value={morse}
        readOnly
        className="tool-textarea"
      ></textarea>

      <div className="tool-button-group">
        <button onClick={() => copyToClipboard(morse)}>Copy Output</button>
        <button onClick={() => downloadOutput(morse, "morse-code.txt")}>
          Download Output
        </button>
        <button onClick={clearAllFields}>Clear</button>
      </div>
    </ToolWrapper>
  );
}

export default TextToMorse;
