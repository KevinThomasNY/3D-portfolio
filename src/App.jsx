import HomePage from "./HomePage";
import Error from "./components/Error";
import Background from "./components/canvas/Background";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dark"
          element={<Background image="./images/dark_hero.jpeg" />}
        />
        <Route
          path="/light"
          element={<Background image="./images/light_hero.jpeg" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
