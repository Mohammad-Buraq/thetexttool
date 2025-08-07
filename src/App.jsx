import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ToolsDirectory from './tools/ToolsDirectory';
import WordCounter from './tools/WordCounter';
import CharacterCounter from './tools/CharacterCounter';
import UppercaseConverter from './tools/UppercaseConverter';
import RemoveDuplicateLines from './tools/RemoveDuplicateLines';
import TextSorter from './tools/TextSorter';
import ReverseText from './tools/ReverseText';
import TextToBinary from './tools/TextToBinary';
import TextToMorse from './tools/TextToMorse';
import TextDiff from './tools/TextDiff';
import About from "./pages/About";
import Contact from "./pages/Contact";
import TitleCaseConverter from './tools/TitleCaseConverter';
import JsonFormatter from './tools/JsonFormatter';
import TextCleaner from './tools/TextCleaner';
import TextToEmoji from './tools/TextToEmoji';
import RemoveLineBreaks from './tools/RemoveLineBreaks';
import RemoveEmptyLines from './tools/RemoveEmptyLines';
import AdminDashboard from './pages/AdminDashboard';
import RemovePunctuation from './tools/RemovePunctuation';
import RemoveNumbers from './tools/RemoveNumbers';
import RemoveAllSpaces from './tools/RemoveAllSpaces';
import SentenceCaseConverter from './tools/SentenceCaseConverter';
import CamelCaseConverter from './tools/CamelCaseConverter';
import KebabCaseConverter from './tools/KebabCaseConverter';
import Base64Encode from './tools/Base64Encode';
import Base64Decode from './tools/Base64Decode';
import TextToUnicode from './tools/TextToUnicode';
import UnicodeToText from './tools/UnicodeToText';
import CapitalizeWords from './tools/CapitalizeWords';
import UrlEncode from './tools/UrlEncode';
import LowercaseConverter from './tools/LowercaseConverter';
import TextRandomCase from './tools/TextRandomCase';
import AddLineNumbers from './tools/AddLineNumbers';



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ToolsDirectory />} />
          <Route path="/tools/wordcounter" element={<WordCounter />} />
          <Route path="/tools/charactercounter" element={<CharacterCounter />} />
          <Route path="/tools/uppercaseconverter" element={<UppercaseConverter />} />
          <Route path="/tools/removeduplicatelines" element={<RemoveDuplicateLines />} />
          <Route path="/tools/textsorter" element={<TextSorter />} />
          <Route path="/tools/reversetext" element={<ReverseText />} />
          <Route path="/tools/texttobinary" element={<TextToBinary />} />
          <Route path="/tools/texttomorse" element={<TextToMorse />} />
          <Route path="/tools/textdiff" element={<TextDiff />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tools/titlecaseconverter" element={<TitleCaseConverter />} />
          <Route path="/tools/jsonformatter" element={<JsonFormatter />} />
          <Route path="/tools/textcleaner" element={<TextCleaner />} />
          <Route path="/tools/texttoemoji" element={<TextToEmoji />} />
          <Route path="/tools/removelinebreaks" element={<RemoveLineBreaks />} />
          <Route path="/tools/removeemptylines" element={<RemoveEmptyLines />} />
          <Route path="/tools/removepunctuation" element={<RemovePunctuation />} />
          <Route path="/tools/removenumbers" element={<RemoveNumbers />} />
          <Route path="/tools/removeallspaces" element={<RemoveAllSpaces />} />
          <Route path="/tools/sentencecaseconverter" element={<SentenceCaseConverter />} />
          <Route path="/tools/camelcaseconverter" element={<CamelCaseConverter />} />
          <Route path="/tools/kebabcaseconverter" element={<KebabCaseConverter />} />
          <Route path="/tools/base64encode" element={<Base64Encode />} />
          <Route path="/tools/base64decode" element={<Base64Decode />} />
          <Route path="/tools/texttounicode" element={<TextToUnicode />} />
          <Route path="/tools/unicodetotext" element={<UnicodeToText />} />
          <Route path="/tools/capitalizewords" element={<CapitalizeWords />} />
          <Route path="/tools/urlencode" element={<UrlEncode />} />
          <Route path="/tools/lowercaseconverter" element={<LowercaseConverter />} />
          <Route path="/tools/textrandomcase" element={<TextRandomCase />} />
          <Route path="/tools/addlinenumbers" element={<AddLineNumbers />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
