import { useState } from "react";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(0);


  const moderator = 1;

  const handleAdd = () => {
    if(counter >= 10) {
      alert("Counter value cannot exceed 10");
      return;
    }
    setCounter(counter + moderator);
    console.log(`counter value: ${counter + moderator}`);
  };

  const handleRem = () => {
    if(counter <= 0) {
      alert("Counter value cannot be less than 0");
      return;
    }
    setCounter(counter - moderator);
    console.log(`counter value: ${counter - moderator}`);
  };

  return (
    <>
      <header>
       I am a {counter} counter 
      </header>
      <h1>Hi</h1>
      <h2>couner value: {counter}</h2>
      <div>
        <div>
          <button onClick={handleAdd}>Add + {moderator}</button>
        </div>
        <div>
          <button onClick={handleRem}>Add - {moderator}</button>
        </div>
      </div>
      <footer>
        <p>Counter value is updated {counter}</p>
      </footer>
    </>
  );
}

export default App;
