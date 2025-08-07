import React from "react";

const ToolWrapper = ({
  title,
  description,
  inputValue,
  outputValue,
  onInputChange,
  onCopyOutput,
  onDownloadOutput,
  children,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
      <p className="text-gray-600 mb-6 text-center">{description}</p>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-1">Input</label>
          <textarea
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            className="w-full border rounded p-3 min-h-[180px]"
            placeholder="Enter text here..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Output</label>
          <textarea
            value={outputValue}
            readOnly
            className="w-full border rounded p-3 min-h-[180px] bg-gray-50"
            placeholder="Output will appear here..."
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={onCopyOutput}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Copy
            </button>
            <button
              onClick={onDownloadOutput}
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
            >
              Download
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">{children}</div>
    </div>
  );
};

export default ToolWrapper;