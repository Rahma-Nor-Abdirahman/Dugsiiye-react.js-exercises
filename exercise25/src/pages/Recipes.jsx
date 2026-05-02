
import { Link } from "react-router-dom";
import { recipes } from "../data/data";

export default function Recipes() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-6">All Recipes</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {recipe.title}
            </h2>

            <p className="text-gray-600 mb-3">
              {recipe.description}
            </p>

            <span className="text-sm bg-pink-100 text-pink-600 px-3 py-1 rounded">
              {recipe.category}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
