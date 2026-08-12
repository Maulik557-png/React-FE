import { useState } from "react";
import Header from "./componenets/header/Header";
import Footer from "./componenets/Footer/Footer";
import Home from "./componenets/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header/> */}
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
