// RecipeApp.tsx

import React from "react";

interface RecipeCardProps {
  image: string;
  title: string;
  proteins: string;
  fats: string;
  cookingTime: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  image,
  title,
  proteins,
  fats,
  cookingTime,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">Proteins: {proteins}</p>
        <p className="text-gray-700 mb-2">Fats: {fats}</p>
        <p className="text-gray-700">Cooking Time: {cookingTime}</p>
      </div>
    </div>
  );
};

interface RecipeGridProps {
  recipes: RecipeCardProps[];
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
    </div>
  );
};

// Example Usage
const recipes: RecipeCardProps[] = [
  {
    image: "path/to/image1.jpg",
    title: "Recipe 1",
    proteins: "20g",
    fats: "15g",
    cookingTime: "30 minutes",
  },
  {
    image: "path/to/image2.jpg",
    title: "Recipe 2",
    proteins: "25g",
    fats: "10g",
    cookingTime: "45 minutes",
  },
  // Add more recipes as needed
];

const RecipeApp: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Collection</h1>
      <RecipeGrid recipes={recipes} />
    </div>
  );
};

export default RecipeApp;
