import { lazy, Suspense } from "react";
import HomePage from "./HomePage";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Background = lazy(() => import("./components/canvas/Background"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dark"
          element={
            <Suspense fallback={null}>
              <Background image="./images/dark_hero.jpeg" />
            </Suspense>
          }
        />
        <Route
          path="/light"
          element={
            <Suspense fallback={null}>
              <Background image="./images/light_hero.jpeg" />
            </Suspense>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
