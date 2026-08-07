import { useState } from "react";

import "./App.css";

import Logo from "./components/Logo.jsx";

function App() {
  const [count, setCount] = useState(0);

  const body = document.querySelector("body");
  body.style.backgroundColor = "black";

  const myArr = [
    { framework: "React", version: "18.2.0" },
    { framework: "Angular", version: "15.2.0" },
    { framework: "Vue", version: "3.3.4" },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="flex text-center bg-green-400 p-4 text-4xl rounded-2xl mb-5">
        Hey, How are you doing?
      </h1>

      <Logo lang="Java" metaData={{framework: "Spring", version:"4.0.0"}} otherLangs={myArr}/>
      <Logo lang="C++" metaData={{framework: "Spring", version:"4.0.0"}} otherLangs={myArr}/>

    </div>
  );
}

export default App;
