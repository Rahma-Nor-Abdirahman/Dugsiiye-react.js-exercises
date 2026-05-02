
import { Link, useParams } from "react-router-dom";
import { recipes } from "../data/data";

export default function RecipeDetail() {
  const { id } = useParams();

  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) {
    return <h1 className="text-2xl font-bold">Recipe Not Found</h1>;
  }

  return (
    <div className="py-10">
      <Link
        to="/recipes"
        className="text-pink-500 font-medium"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white p-8 rounded-xl shadow mt-4">
        <h1 className="text-3xl font-bold mb-6">
          {recipe.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Ingredients
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              Instructions
            </h2>

            <ol className="list-decimal pl-5 space-y-2">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}