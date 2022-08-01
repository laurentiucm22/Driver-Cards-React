import "./App.css";
import DriversPage from "./pages/DriversPage";
import NavbarPage from "./pages/NavbarPage";
import TitlePage from "./pages/TitlePage";
import mockData from "./constants/mockData";

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <TitlePage />
      <DriversPage mockData={mockData} />
    </div>
  );
}

export default App;
