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
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
