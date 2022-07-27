import "./App.css";
import DriversPage from "./pages/DriversPage";
import NavbarPage from "./pages/NavbarPage";
import TitlePage from "./pages/TitlePage";

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <TitlePage />
      <DriversPage />
    </div>
  );
}

export default App;
