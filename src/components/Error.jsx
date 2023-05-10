import { useNavigate } from "react-router-dom";
import Gandalf from "./canvas/Gandalf";
export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center p-2">
      <h1 className="mb-8  text-4xl font-bold text-gray-900 md:text-6xl">
        Error 404
      </h1>
      <p className="center mb-8 text-center text-xl text-gray-700 md:text-2xl">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        className="focus:shadow-outline mb-4 rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        onClick={() => navigate("/")}
      >
        Go to Home Page
      </button>
      <div className="h-96">
        <Gandalf />
      </div>

      <p className="text-2xl text-gray-900 md:text-4xl">YOU SHALL NOT PASS!</p>
    </div>
  );
}
