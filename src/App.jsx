import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomiseRoom from "./pages/CustomiseRoom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customise-room" element={<CustomiseRoom/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
