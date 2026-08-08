import { useState } from "react";

function Badge({ onColorSelect }) {
  const [color, setColor] = useState("#121212");

  const buttonsData = [
    {
      label: "Gray",
      hex: "#121212",
      classes:
        "bg-gray-400/10 text-gray-300 inset-ring-gray-600 hover:bg-gray-400/20",
    },
    {
      label: "Red",
      hex: "#DC2626",
      classes:
        "bg-red-400/10 text-red-400 inset-ring-red-600 hover:bg-red-400/20",
    },
    {
      label: "Yellow",
      hex: "#CA8A04",
      classes:
        "bg-yellow-400/10 text-yellow-500 inset-ring-yellow-600 hover:bg-yellow-400/20",
    },
    {
      label: "Green",
      hex: "#16A34A",
      classes:
        "bg-green-400/10 text-green-400 inset-ring-green-600 hover:bg-green-400/20",
    },
    {
      label: "Blue",
      hex: "#2563EB",
      classes:
        "bg-blue-400/10 text-blue-400 inset-ring-blue-600 hover:bg-blue-400/20",
    },
    {
      label: "Indigo",
      hex: "#4F46E5",
      classes:
        "bg-indigo-400/10 text-indigo-500 inset-ring-indigo-600 hover:bg-indigo-400/20",
    },
    {
      label: "Purple",
      hex: "#9333EA",
      classes:
        "bg-purple-400/10 text-purple-400 inset-ring-purple-600 hover:bg-purple-400/20",
    },
    {
      label: "Pink",
      hex: "#DB2777",
      classes:
        "bg-pink-400/10 text-pink-400 inset-ring-pink-600 hover:bg-pink-400/20",
    },
  ];

  return (
    <>
      {buttonsData.map((btn, index) => (
        <button
          key={index}
          onClick={() => onColorSelect(btn.hex)}
          className={`inline-flex items-center rounded-md px-10 py-3 text-xl font-medium inset-ring mx-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 active:scale-95 active:translate-y-0 select-none ${btn.classes}`}
        >
          {btn.label}
        </button>
      ))}
    </>
  );
}

export default Badge;
