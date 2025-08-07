import React, { useState } from "react";

function JsonFormatter() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const formatJson = () => {
    try {
      const parsed = JSON.parse(text);
      setError("");
      return JSON.stringify(parsed, null, 2);
    } catch (err) {
      setError("Invalid JSON: " + err.message);
      return "";
    }
  };

  const getKeySummary = () => {
    try {
      const parsed = JSON.parse(text);
      if (typeof parsed === "object" && parsed !== null) {
        const keys = Object.keys(parsed);
        return keys.slice(0, 5); // show up to 5 keys
      }
    } catch {
      return [];
    }
    return [];
  };

  const formattedText = formatJson();
  const topKeys = getKeySummary();

  const handleCopy = () => {
    if (formattedText) {
      navigator.clipboard.writeText(formattedText);
      alert("Formatted JSON copied!");
    }
  };

  const handleDownload = () => {
    if (formattedText) {
      const blob = new Blob([formattedText], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `formatted-json-${Date.now()}.json`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleClear = () => {
    setText("");
    setError("");
  };

  return (
    <div className="tool-container">
      <h2>JSON Formatter</h2>

      {/* Input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your JSON here..."
        rows={8}
        className="form-control mb-3"
      ></textarea>

      {/* Output */}
      <div className="output-box p-3 border rounded mb-3 bg-light">
        {error ? (
          <p className="text-danger"><strong>{error}</strong></p>
        ) : (
          <>
            <p><strong>Status:</strong> Valid JSON</p>

            {topKeys.length > 0 && (
              <>
                <p><strong>Top-level keys:</strong> {topKeys.join(", ")}</p>
              </>
            )}

            <p><strong>Formatted Output:</strong></p>
            <pre
              className="border p-2 bg-white rounded"
              style={{ whiteSpace: "pre-wrap", minHeight: "100px" }}
              aria-label="Formatted JSON"
            >
              {formattedText}
            </pre>
          </>
        )}
      </div>

      {/* Buttons */}
      <div className="d-flex flex-wrap gap-2">
        <button onClick={handleCopy} className="btn btn-primary" disabled={!!error}>Copy Output</button>
        <button onClick={handleDownload} className="btn btn-secondary" disabled={!!error}>Download Output</button>
        <button onClick={handleClear} className="btn btn-outline-danger">Clear</button>
      </div>
    </div>
  );
}

export default JsonFormatter;
