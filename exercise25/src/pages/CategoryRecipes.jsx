
import { Link, useParams } from "react-router-dom";
import { recipes } from "../data/data";

export default function CategoryRecipes() {
  const { categoryId } = useParams();

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === categoryId
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 capitalize">
        {categoryId} Recipes
      </h2>

      {filteredRecipes.length > 0 ? (
        <div className="space-y-4">
          {filteredRecipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipes/${recipe.id}`}
              className="block border p-4 rounded-lg hover:shadow"
            >
              <h3 className="font-semibold">
                {recipe.title}
              </h3>
              <p className="text-gray-600">
                {recipe.description}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <p>No recipes found in this category.</p>
      )}
    </div>
  );
}