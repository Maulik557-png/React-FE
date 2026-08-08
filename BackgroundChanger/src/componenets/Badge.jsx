import { useState } from "react";

function Badge() {
  const [color, setColor] = useState("#121212");

  const colors = ["gray", "Red", "Yellow", "Green", "Blue", "Indigo", "Purple", "Pink"];

  return (
    <>
      <button
        className="inline-flex items-center rounded-md bg-gray-400/10 px-10 py-3 text-1xl font-medium text-gray-300 inset-ring inset-ring-gray-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-gray-400/20 active:scale-95 active:translate-y-0 select-none" onClick={() => setColor(colors[0])}
      >
        Gray
      </button>
      <button className="inline-flex items-center rounded-md bg-red-400/10 px-10 py-3 text-1xl font-medium text-red-400 inset-ring inset-ring-red-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-red-400/20 active:scale-95 active:translate-y-0 select-none" onClick={() => setColor(colors[1])}
      >
        Red
      </button>
      <button className="inline-flex items-center rounded-md bg-yellow-400/10 px-10 py-3 text-1xl font-medium text-yellow-500 inset-ring inset-ring-yellow-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-yellow-400/20 active:scale-95 active:translate-y-0 select-none">
        Yellow
      </button>
      <button className="inline-flex items-center rounded-md bg-green-400/10 px-10 py-3 text-1xl font-medium text-green-400 inset-ring inset-ring-green-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-green-400/20 active:scale-95 active:translate-y-0 select-none">
        Green
      </button>
      <button className="inline-flex items-center rounded-md bg-blue-400/10 px-10 py-3 text-1xl font-medium text-blue-400 inset-ring inset-ring-blue-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-blue-400/20 active:scale-95 active:translate-y-0 select-none">
        Blue
      </button>
      <button className="inline-flex items-center rounded-md bg-indigo-400/10 px-10 py-3 text-1xl font-medium text-indigo-500 inset-ring inset-ring-indigo-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-indigo-400/20 active:scale-95 active:translate-y-0 select-none">
        Indigo
      </button>
      <button className="inline-flex items-center rounded-md bg-purple-400/10 px-10 py-3 text-1xl font-medium text-purple-400 inset-ring inset-ring-purple-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-purple-400/20 active:scale-95 active:translate-y-0 select-none">
        Purple
      </button>
      <button className="inline-flex items-center rounded-md bg-pink-400/10 px-10 py-3 text-1xl font-medium text-pink-400 inset-ring inset-ring-pink-600 mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:bg-pink-400/20 active:scale-95 active:translate-y-0 select-none">
        Pink
      </button>
    </>
  );
}

export default Badge;
