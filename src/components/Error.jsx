import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-8 text-6xl font-bold text-gray-900">Error 404</h1>
      <p className="mb-8 text-2xl text-gray-700">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        className="focus:shadow-outline rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        onClick={() => navigate("/")}
      >
        Go to Home Page
      </button>
    </div>
  );
}
