import React, { useState } from "react";

const morseCodeMap = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..", 0: "-----", 1: ".----", 2: "..---",
  3: "...--", 4: "....-", 5: ".....", 6: "-....", 7: "--...",
  8: "---..", 9: "----.", " ": "/"
};

function textToMorse(text) {
  return text
    .toUpperCase()
    .split("")
    .map((char) => morseCodeMap[char] || "")
    .join(" ");
}

export default function TextToMorse() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => {
    const morse = textToMorse(input);
    setOutput(morse);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "morse-code.txt";
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="tool-container">
      <h2>Text to Morse Code Converter</h2>
      <textarea
        className="input-box"
        rows="6"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your text here..."
      />
      <button onClick={handleConvert}>Convert</button>

      <textarea
        className="output-box"
        rows="6"
        value={output}
        readOnly
        placeholder="Morse code will appear here..."
      />

      {output && (
        <div className="button-group">
          <button onClick={handleCopy}>Copy Output</button>
          <button onClick={handleDownload}>Download Output</button>
        </div>
      )}
    </div>
  );
}