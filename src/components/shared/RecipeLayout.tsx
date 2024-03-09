import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css"; // Import your CSS file for styling
import RecipeCard from "./RecipeCard";

interface Recipe {
  Recipe_title: string;
  Calories: number;
  "Protein (g)": string;
  "Total lipid (fat) (g)": string;
  img_url: string;
  Recipe_id: string;
  url: string;
}

function RecipeLayout() {
  const { searchText } = useParams();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(
          `https://apis-new.foodoscope.com/recipe-search/recipe?searchText=${searchText}&pageSize=10`,
          {
            headers: {
              Authorization:
                "Bearer 0iukwZ9CyanPrXFMjVX7LKe8UoazZoZDDIVGFWYJq-7fCvb0",
              accept: "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data.payload.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }

    fetchRecipes();
  }, [searchText]);

  return (
    <div className="grid-container">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          url={recipe.url}
          id={recipe.Recipe_id}
          title={recipe.Recipe_title}
          calories={recipe.Calories}
          proteins={recipe["Protein (g)"]}
          fats={recipe["Total lipid (fat) (g)"]}
          image={recipe.img_url}
        />
      ))}
    </div>
  );
}

export default RecipeLayout;
