import { useState } from "react";
import "./App.css";
import BadgeCopy from "./componenets/BadgeCopy";

function AppCopy() {
  const [color, setColor] = useState("#121212");

  return (
    <>
      <div
        className="w-screen h-screen transition-all duration-300 ease-out"
        style={{ backgroundColor: color }}
      ></div>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-row flex-nowrap items-center bg-white/70 dark:bg-black/70 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/20 max-w-[95vw] overflow-x-auto whitespace-nowrap scrollbar-none">
        <BadgeCopy onColorSelect={setColor} />
      </div>
    </>
  );
}

export default AppCopy;
