import React from "react";
import { Link } from "react-router-dom";

import {
  FaFont,
  FaSortAlphaDown,
  FaSync,
  FaFileCode,
  FaParagraph,
  FaRegKeyboard,
  FaMicrochip,
  FaExchangeAlt,
  FaRandom,
  FaPaintBrush,
  FaWrench,
} from "react-icons/fa";

import { FaRegSmileWink, FaMinus } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";

const tools = [
  {
    path: "wordcounter",
    name: "Word Counter",
    desc: "Count words, characters, sentences, and paragraphs.",
    icon: <FaParagraph size={24} />,
  },
  {
    path: "charactercounter",
    name: "Character Counter",
    desc: "Count characters with and without spaces.",
    icon: <FaFont size={24} />,
  },
  {
    path: "uppercaseconverter",
    name: "Uppercase Converter",
    desc: "Convert text to uppercase or lowercase.",
    icon: <FaRegKeyboard size={24} />,
  },
  {
    path: "removeduplicatelines",
    name: "Remove Duplicate Lines",
    desc: "Remove duplicate lines from any text.",
    icon: <FaSync size={24} />,
  },
  {
    path: "textsorter",
    name: "Text Sorter",
    desc: "Sort text alphabetically A–Z or Z–A.",
    icon: <FaSortAlphaDown size={24} />,
  },
  {
    path: "reversetext",
    name: "Reverse Text",
    desc: "Reverse the entire text or individual lines.",
    icon: <FaRandom size={24} />,
  },
  {
    path: "texttobinary",
    name: "Text to Binary",
    desc: "Convert text into binary code.",
    icon: <FaMicrochip size={24} />,
  },
  {
    path: "texttomorse",
    name: "Text to Morse",
    desc: "Translate text into Morse code.",
    icon: <FaFileCode size={24} />,
  },
  {
    path: "textdiff",
    name: "Text Compare",
    desc: "Compare two blocks of text for differences.",
    icon: <FaExchangeAlt size={24} />,
  },
  {
    path: "titlecaseconverter",
    name: "Title Case Converter",
    desc: "Convert text to Title Case, Sentence case, and more.",
    icon: <FaPaintBrush size={24} />,
  },
  {
    path: "jsonformatter",
    name: "JSON Formatter",
    desc: "Format and validate your JSON code instantly.",
    icon: <FaFileCode size={24} />,
  },
  {
    path: "textcleaner",
    name: "Text Cleaner",
    desc: "Remove tabs, spaces, special characters, and more.",
    icon: <FaWrench size={24} />,
  },
  {
    path: "texttoemoji",
    name: "Text to Emoji",
    desc: "Convert words like 'coffee' or 'cat' into emojis.",
    icon: <FaRegSmileWink size={24} />,
  },
  {
    path: "removelinebreaks",
    name: "Remove Line Breaks",
    desc: "Remove all line breaks from your text in one click.",
    icon: <FaMinus size={24} />,
  },
  {
    path: "removeemptylines",
    name: "Remove Empty Lines",
    desc: "Clean up unnecessary blank lines from your text.",
    icon: <FaEraser size={24} />,
  },
  {
    path: "removepunctuation",
    name: "Remove Punctuation",
    desc: "Strip all punctuation characters from text.",
    icon: <FaEraser size={24} />,
  },
  {
    path: "removenumbers",
    name: "Remove Numbers",
    desc: "Remove digits and numbers from text.",
    icon: <FaEraser size={24} />,
  },
  {
    path: "removeallspaces",
    name: "Remove All Spaces",
    desc: "Delete all spaces from your text.",
    icon: <FaMinus size={24} />,
  },
  {
    path: "sentencecaseconverter",
    name: "Sentence Case Converter",
    desc: "Convert your text to sentence case format.",
    icon: <FaPaintBrush size={24} />,
  },
  {
    path: "camelcaseconverter",
    name: "Camel Case Converter",
    desc: "Convert your text into camelCase.",
    icon: <FaPaintBrush size={24} />,
  },
  {
    path: "kebabcaseconverter",
    name: "Kebab Case Converter",
    desc: "Convert your text into kebab-case.",
    icon: <FaPaintBrush size={24} />,
  },
  {
    path: "base64encode",
    name: "Base64 Encode",
    desc: "Encode text to Base64 format.",
    icon: <FaFileCode size={24} />,
  },
  {
    path: "base64decode",
    name: "Base64 Decode",
    desc: "Decode Base64-encoded text.",
    icon: <FaFileCode size={24} />,
  },
  {
    path: "texttounicode",
    name: "Text to Unicode",
    desc: "Convert text to Unicode escape sequences.",
    icon: <FaMicrochip size={24} />,
  },
  {
    path: "unicodetotext",
    name: "Unicode to Text",
    desc: "Convert Unicode escape sequences back to text.",
    icon: <FaMicrochip size={24} />,
  },
  {
    path: "capitalizewords",
    name: "Capitalize Each Word",
    desc: "Capitalize the first letter of every word.",
    icon: <FaPaintBrush size={24} />,
  },
  {
    path: "urlencode",
    name: "URL Encode",
    desc: "Encode text into a valid URL format.",
    icon: <FaFileCode size={24} />,
  },
  {
    path: "lowercaseconverter",
    name: "Lowercase Converter",
    desc: "Convert text to lowercase letters.",
    icon: <FaRegKeyboard size={24} />,
  },
  {
    path: "textrandomcase",
    name: "Random Case Generator",
    desc: "Randomly change each character’s case.",
    icon: <FaRandom size={24} />,
  },
  {
    path: "addlinenumbers",
    name: "Add Line Numbers",
    desc: "Add numbers to each line of text.",
    icon: <FaSortAlphaDown size={24} />,
  },
];

function ToolsDirectory() {
  return (
    <div className="min-h-screen px-4 py-10 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight text-gray-900 dark:text-white">
          100+ Free AI & Text Tools
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Boost productivity with high-quality utilities built for speed and
          simplicity.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.path}
            to={`/tools/${tool.path}`}
            className="block p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2 text-blue-600 dark:text-blue-400">
              {tool.icon}
              <h2 className="text-lg font-semibold">{tool.name}</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {tool.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ToolsDirectory;
