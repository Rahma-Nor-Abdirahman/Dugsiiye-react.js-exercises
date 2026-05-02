import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to Recipe App 🍲</h1>

      <div className="flex gap-4 mt-6">
        <Link to="/recipes" className="p-4 bg-gray-200 rounded">
          View Recipes
        </Link>

        <Link to="/categories" className="p-4 bg-gray-200 rounded">
          Browse Categories
        </Link>
      </div>
    </div>
  );
}