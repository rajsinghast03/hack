import React from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { FaFireFlameCurved } from "react-icons/fa6";
import { CiForkAndKnife } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { UseDispatch, useDispatch } from "react-redux";
import { setCalories, setFats, setProteins } from "../../state/index.js";
import { useSelector } from "react-redux";

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
  id,
  url,
}) => {
  const user = useSelector((state) => state.user);
  let dispatch = useDispatch();

  async function handleClick() {
    const response = await fetch(
      `http://localhost:8000/api/v1/users/${user._id}/${id}`,
      {
        method: "PATCH",
      }
    );
    const data = response.json();
    console.log(data);
    dispatch(
      setCalories({
        calories: Number(calories),
      })
    );
    dispatch(
      setFats({
        fats: Number(fats),
      })
    );
    dispatch(
      setProteins({
        proteins: Number(proteins),
      })
    );
    console.log(id);
  }
  return (
    <div className="recipe-card ">
      {ReactHtmlParser(title)}

      <Link to={url}>
        <img src={image} alt={title} className="hover:cursor-pointer" />
      </Link>

      <p className="flex items-center">
        <div className="flex gap-2 items-center">
          <FaFireFlameCurved /> Calories
        </div>
        : {calories}
      </p>
      <p className="flex items-center">
        <div className="flex gap-2 items-center">
          <FaFireFlameCurved /> Proteins
        </div>
        : {proteins}
      </p>
      <p className="flex items-center">
        <div className="flex gap-2 items-center">
          <FaFireFlameCurved /> Fats
        </div>
        : {fats}
      </p>
      <div className="ml-19">
        <button
          onClick={() => handleClick()}
          className="px-4 py-2 bg-[#4ade80] rounded-full hover:bg-green-800"
        >
          Add
        </button>
      </div>
    </div>

    // <div className="meal">
    //   <img src={image} alt="Japanese Gyozas" className="meal-img" />

    //   <div className="meal-content">
    //     <div className="meal-tags">
    //       <span className="tag tag--vegetarian">Vegetarian</span>
    //     </div>

    //     <p className="meal-title">{ReactHtmlParser(title)}</p>
    //     <ul className="meal-attributes">
    //       <li className="meal-attribute">
    //         <FaFireFlameCurved />
    //         <span>
    //           <strong>{calories}</strong> calories
    //         </span>
    //       </li>
    //       <li className="meal-attribute">
    //         <FaFireFlameCurved />

    //         <span>
    //           Proteins <strong>{proteins}</strong>
    //         </span>
    //       </li>
    //       <li className="meal-attribute">
    //         <FaFireFlameCurved />
    //         <span>
    //           Fats <strong>{fats}</strong>
    //         </span>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default RecipeCard;
