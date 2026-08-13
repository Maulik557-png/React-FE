import AuthGate from "./componenets/AuthGate";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <AuthGate />
    </UserContextProvider>
  );
}

export default App;
