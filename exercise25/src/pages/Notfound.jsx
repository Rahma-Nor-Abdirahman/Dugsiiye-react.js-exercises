
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">
        404
      </h1>

      <p className="text-gray-600 mb-6">
        Page Not Found
      </p>

      <Link
        to="/"
        className="bg-pink-500 text-white px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );}