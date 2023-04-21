import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-6xl">Error 404</h1>
      <button
        className="rounded-md bg-blue-300 p-4 text-lg"
        onClick={() => navigate("/")}
      >
        Home Page
      </button>
    </>
  );
}
