import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+[]{}|;:,.<>?";
const SCRAMBLE_POOL = LOWER + UPPER + NUMBERS + SYMBOLS;

function randomChar(pool) {
  return pool.charAt(Math.floor(Math.random() * pool.length));
}

function getStrength(bits) {
  if (bits < 35) return { label: "Weak", color: "#F2708A", segments: 1 };
  if (bits < 50) return { label: "Fair", color: "#F2A65A", segments: 2 };
  if (bits < 70) return { label: "Strong", color: "#4FD8C4", segments: 4 };
  return { label: "Very strong", color: "#7CF2D9", segments: 5 };
}

function formatCrackTime(seconds) {
  if (!isFinite(seconds) || seconds < 1) return "instantly";
  const years = seconds / 31536000;
  if (years >= 1e12) return "longer than the universe has existed";
  if (years >= 1e9) return `${(years / 1e9).toFixed(1)}B years`;
  if (years >= 1e6) return `${(years / 1e6).toFixed(1)}M years`;
  if (years >= 1e3) return `${Math.round(years / 1e3)}K years`;
  if (years >= 1) return `${Math.round(years)} year${years >= 2 ? "s" : ""}`;

  const units = [
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
  ];
  for (const [name, secs] of units) {
    if (seconds >= secs) {
      const val = Math.round(seconds / secs);
      return `${val} ${name}${val !== 1 ? "s" : ""}`;
    }
  }
  return "instantly";
}

function Toggle({ id, checked, onChange, label }) {
  return (
    <label htmlFor={id} className="flex items-center gap-3 cursor-pointer select-none">
      <span className="relative inline-flex h-6 w-11 shrink-0 items-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />
        <span
          className={`absolute inset-0 rounded-full transition-colors duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-[#4FD8C4]/50 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#121826] ${
            checked ? "bg-[#4FD8C4]" : "bg-[#29344A]"
          }`}
        />
        <span
          className={`relative inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </span>
      <span className="text-sm font-medium text-[#C4CCDB]">{label}</span>
    </label>
  );
}

function RefreshIcon({ spinning }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 ${spinning ? "animate-spin" : ""}`}
    >
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
      <path d="M21 4v5h-5" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Claude_App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const passwordRef = useRef(null);
  const scrambleTimeout = useRef(null);
  const copyTimeout = useRef(null);

  const generatePassword = useCallback(() => {
    let charset = LOWER + UPPER;
    if (includeNumbers) charset += NUMBERS;
    if (includeSymbols) charset += SYMBOLS;

    let final = "";
    for (let i = 0; i < length; i++) {
      final += randomChar(charset);
    }

    if (scrambleTimeout.current) clearTimeout(scrambleTimeout.current);

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setPassword(final);
      return;
    }

    setIsRolling(true);
    const maxTicks = 8;
    let tick = 0;

    const step = () => {
      tick += 1;
      const lockedCount = Math.round((tick / maxTicks) * length);
      let display = "";
      for (let i = 0; i < length; i++) {
        display += i < lockedCount ? final[i] : randomChar(SCRAMBLE_POOL);
      }
      setPassword(display);

      if (tick >= maxTicks) {
        setIsRolling(false);
        return;
      }
      scrambleTimeout.current = setTimeout(step, 26);
    };

    step();
  }, [length, includeNumbers, includeSymbols]);

  useEffect(() => {
    generatePassword();
    return () => {
      if (scrambleTimeout.current) clearTimeout(scrambleTimeout.current);
      if (copyTimeout.current) clearTimeout(copyTimeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, includeNumbers, includeSymbols]);

  const handleCopy = useCallback(async () => {
    passwordRef.current?.select();
    if (!password || isRolling) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      if (copyTimeout.current) clearTimeout(copyTimeout.current);
      copyTimeout.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }, [password, isRolling]);

  const handleLengthChange = (event) => setLength(Number(event.target.value));
  const handleIncludeNumbersChange = (event) => setIncludeNumbers(event.target.checked);
  const handleIncludeSymbolsChange = (event) => setIncludeSymbols(event.target.checked);

  const charsetSize = 52 + (includeNumbers ? 10 : 0) + (includeSymbols ? 24 : 0);
  const entropyBits = length * Math.log2(charsetSize);
  const strength = getStrength(entropyBits);
  const crackSeconds = Math.pow(2, Math.max(entropyBits - 1, 0)) / 1e10;
  const crackTimeLabel = formatCrackTime(crackSeconds);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0A0E17] p-4">
      <div
        className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[#4FD8C4] opacity-[0.08] blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md rounded-2xl border border-[#212B3D] bg-[#121826] p-8 shadow-2xl shadow-black/50">
        <div className="mb-1 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#5D6B85]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4FD8C4]" aria-hidden="true" />
          Vault keygen
        </div>
        <h1 className="mb-6 text-2xl font-bold tracking-tight text-[#EDF2F9]">
          Password Generator
        </h1>

        <div className="mb-4 flex items-center gap-2 rounded-xl border border-[#212B3D] bg-[#0B111C] p-1.5 transition-colors focus-within:border-[#4FD8C4]/60">
          <input
            type="text"
            value={password}
            onFocus={(e) => e.target.select()}
            className="w-full min-w-0 truncate bg-transparent px-3 py-2 font-mono text-lg text-[#EDF2F9] outline-none"
            placeholder="Generated password"
            readOnly
            ref={passwordRef}
            aria-label="Generated password"
          />

          <button
            type="button"
            onClick={generatePassword}
            title="Regenerate password"
            aria-label="Regenerate password"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#8B96AC] transition-colors hover:bg-[#1B2436] hover:text-[#4FD8C4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD8C4]/60"
          >
            <RefreshIcon spinning={isRolling} />
          </button>

          <button
            type="button"
            onClick={handleCopy}
            disabled={!password || isRolling}
            className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#4FD8C4] px-3 py-2 text-sm font-semibold text-[#0A0E17] transition-colors hover:bg-[#6EE7D6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD8C4]/60 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <span className="sr-only" role="status" aria-live="polite">
          {copied ? "Password copied to clipboard" : ""}
        </span>

        <div className="mb-6 rounded-lg border border-[#212B3D] bg-[#0B111C] px-3 py-2.5">
          <div className="mb-1.5 flex items-center justify-between">
            <div className="flex gap-1" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-6 rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: i < strength.segments ? strength.color : "#212B3D",
                  }}
                />
              ))}
            </div>
            <span
              className="font-mono text-xs font-semibold uppercase tracking-wide transition-colors duration-300"
              style={{ color: strength.color }}
            >
              {strength.label}
            </span>
          </div>
          <p className="font-mono text-[11px] text-[#5D6B85]">
            ~{Math.round(entropyBits)} bits · ≈ {crackTimeLabel} to crack at 10B guesses/sec
          </p>
        </div>

        <div className="space-y-5 border-t border-[#212B3D] pt-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm font-medium text-[#8B96AC]">
              <label htmlFor="lengthRange">Password length</label>
              <span className="rounded bg-[#1B2436] px-2 py-0.5 font-mono text-[#EDF2F9]">
                {length}
              </span>
            </div>

            <input
              id="lengthRange"
              type="range"
              min={6}
              max={32}
              value={length}
              onChange={handleLengthChange}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#212B3D] accent-[#4FD8C4]"
            />
            <div className="flex justify-between font-mono text-[10px] text-[#4B5568]">
              <span>6</span>
              <span>32</span>
            </div>
          </div>

          <div className="flex items-center gap-8 pt-1">
            <Toggle
              id="includeNumbers"
              checked={includeNumbers}
              onChange={handleIncludeNumbersChange}
              label="Numbers"
            />
            <Toggle
              id="includeSymbols"
              checked={includeSymbols}
              onChange={handleIncludeSymbolsChange}
              label="Symbols"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Claude_App;