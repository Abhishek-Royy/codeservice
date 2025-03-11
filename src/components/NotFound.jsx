import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-200 text-yellow-900">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-lg text-yellow-800">
        Sorry, the page you are looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-lg font-medium text-yellow-900 bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
}
