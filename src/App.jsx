import HomePage from "./HomePage";
import DarkBackground from "./components/canvas/DarkBackground";
import Error from "./components/Error";
import LightBackground from "./components/canvas/LightBackground";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dark" element={<DarkBackground />} />
        <Route path="/light" element={<LightBackground />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
