import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#121212");

  const colors = ["#121212", "#DC2626", "#CA8A04", "#16A34A", "#2563EB", "#4F46E5", "#9333EA", "#DB2777"];

  return (
    <>
      <div
        className="w-screen h-screen transition-all duration-300 ease-out"
        style={{ backgroundColor: color }}
      ></div>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-row flex-nowrap items-center bg-white/70 dark:bg-black/70 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/20 max-w-[95vw] overflow-x-auto whitespace-nowrap scrollbar-none">
        <button
          className="inline-flex items-center rounded-md bg-gray-400/10 px-10 py-3 text-1xl font-medium text-gray-300 inset-ring inset-ring-gray-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-gray-400/20 active:scale-95 active:translate-y-0 select-none"
          onClick={() => setColor(colors[0])}
        >
          Gray
        </button>
        <button
          className="inline-flex items-center rounded-md bg-red-400/10 px-10 py-3 text-1xl font-medium text-red-400 inset-ring inset-ring-red-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-red-400/20 active:scale-95 active:translate-y-0 select-none"
          onClick={() => setColor(colors[1])}
        >
          Red
        </button>
        <button className="inline-flex items-center rounded-md bg-yellow-400/10 px-10 py-3 text-1xl font-medium text-yellow-500 inset-ring inset-ring-yellow-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-yellow-400/20 active:scale-95 active:translate-y-0 select-none" onClick={() => setColor(colors[2])}
        >
          Yellow
        </button>
        <button className="inline-flex items-center rounded-md bg-green-400/10 px-10 py-3 text-1xl font-medium text-green-400 inset-ring inset-ring-green-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-green-400/20 active:scale-95 active:translate-y-0 select-none" onClick={() => setColor(colors[3])}
        >
          Green
        </button>
        <button className="inline-flex items-center rounded-md bg-blue-400/10 px-10 py-3 text-1xl font-medium text-blue-400 inset-ring inset-ring-blue-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-blue-400/20 active:scale-95 active:translate-y-0 select-none" onClick={() => setColor(colors[4])}
        >
          Blue
        </button>
        <button className="inline-flex items-center rounded-md bg-indigo-400/10 px-10 py-3 text-1xl font-medium text-indigo-500 inset-ring inset-ring-indigo-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-indigo-400/20 active:scale-95 active:translate-y-0 select-none" onClick={() => setColor(colors[5])}
        >
          Indigo
        </button>
        <button className="inline-flex items-center rounded-md bg-purple-400/10 px-10 py-3 text-1xl font-medium text-purple-400 inset-ring inset-ring-purple-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-purple-400/20 active:scale-95 active:translate-y-0 select-none" onClick={() => setColor(colors[6])}
        >
          Purple
        </button>
        <button className="inline-flex items-center rounded-md bg-pink-400/10 px-10 py-3 text-1xl font-medium text-pink-400 inset-ring inset-ring-pink-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-pink-400/20 active:scale-95 active:translate-y-0 select-none" onClick={() => setColor(colors[7])}
        >
          Pink
        </button>
      </div>
    </>
  );
}

export default App;
