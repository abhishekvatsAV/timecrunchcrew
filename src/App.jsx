import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomiseRoom from "./pages/CustomiseRoom";
import Test from "./components/Test"
import UserFirstPage from "./pages/UserFirstPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customise-room" element={<CustomiseRoom/>} />
          <Route path="/test" element={<Test />} />
          <Route path="/user" element={<UserFirstPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
