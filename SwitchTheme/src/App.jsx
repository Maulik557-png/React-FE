import "./App.css";
import Card from "./componenets/Card.jsx";
import ThemeBtn from "./componenets/ThemeBtn.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-gray-100 transition-colors duration-300 dark:bg-gray-950">
        <header className="mx-auto flex max-w-7xl items-center justify-end p-6">
          <ThemeBtn />
        </header>

        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 pb-16">
          <Card />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
