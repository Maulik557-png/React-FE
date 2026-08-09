import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let newPassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    if (includeNumbers) {
      str += numbers;
    }

    if (includeSymbols) {
      str += symbols;
    }

    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      newPassword += str.charAt(randomIndex);
    }

    setPassword(newPassword);
  }, [length, includeNumbers, includeSymbols]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword, length, includeNumbers, includeSymbols, setPassword]);

  const handleCopy = useCallback(async () => {
    passwordRef.current?.select();

    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }, [password]);

  const handleLengthChange = (event) => {
    setLength(Number(event.target.value));
  };

  const handleIncludeNumbersChange = (event) => {
    setIncludeNumbers(event.target.checked);
  };

  const handleIncludeSymbolsChange = (event) => {
    setIncludeSymbols(event.target.checked);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800 tracking-tight mb-6">
          Password Generator
        </h1>

        <div className="flex items-center gap-2 overflow-hidden rounded-lg border border-gray-300 bg-white p-1 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all mb-6">
          <input
            type="text"
            value={password}
            className="w-full bg-transparent px-3 py-2 text-gray-700 font-mono text-lg outline-none placeholder-gray-400"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="space-y-4 border-t border-gray-100 pt-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm font-medium text-gray-600">
              <label htmlFor="lengthRange">Password Length </label>
              <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-800">
                {length}
              </span>
            </div>

            <input
              id="lengthRange"
              type="range"
              min={8}
              max={32}
              value={length}
              onChange={handleLengthChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div className="flex items-center gap-6 pt-2">
            <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-600 select-none">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={handleIncludeNumbersChange}
                className="w-4 h-4 rounded text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
              />
              <span>Numbers</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-600 select-none">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={handleIncludeSymbolsChange}
                className="w-4 h-4 rounded text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
              />
              <span>Symbols</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
