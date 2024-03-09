import React from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

interface RecipeCardProps {
  title: string;
  calories: number;
  proteins: string;
  fats: string;
  image: string;
  onAdd: (title: string) => void;
  url: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  title,

  calories,
  proteins,
  fats,
  image,
  onAdd,
  url,
}) => {
  return (
    <div className="recipe-card ">
      {ReactHtmlParser(title)}

      <Link to={url}>
        <img src={image} alt={title} className="hover:cursor-pointer" />
      </Link>

      <p>Calories: {calories}</p>
      <p>Proteins: {proteins}</p>
      <p>Fats: {fats}</p>
      <div className="buttons">
        <button onClick={() => onAdd(title)}>Add</button>
      </div>
    </div>
  );
};

export default RecipeCard;
