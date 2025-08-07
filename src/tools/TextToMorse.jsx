import ToolWrapper from "../components/ToolWrapper";
import { useState } from "react";

const morseCodeMap = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....",
  I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.",
  Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..", "0": "-----", "1": ".----", "2": "..---", "3": "...--",
  "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----."
};

function toMorse(text) {
  return text
    .toUpperCase()
    .split("")
    .map((char) => morseCodeMap[char] || "")
    .join(" ");
}

export default function TextToMorse() {
  const [text, setText] = useState("");
  const output = toMorse(text);

  return (
    <ToolWrapper
      title="Text to Morse Code"
      inputValue={text}
      setInputValue={setText}
      outputValue={output}
    />
  );
}