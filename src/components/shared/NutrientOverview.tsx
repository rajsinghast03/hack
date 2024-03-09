import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const protein = 66;
const fats = 32;
const calories = 23;

function NutrientOverview() {
  return (
    <div className="px-4 py-3">
      <h2 className="mt-7 text-3xl font-semibold text-center mb-10">
        Your Nutrient Score:
      </h2>
      <div className="flex gap-4 justify-center">
        <div
          style={{ width: 200, height: 200 }}
          className="flex flex-col items-center gap-3"
        >
          <CircularProgressbar value={protein} text={`${protein}%`} />
          <p>Protein</p>
        </div>
        <div
          style={{ width: 200, height: 200 }}
          className="flex flex-col items-center gap-3"
        >
          <CircularProgressbar value={fats} text={`${fats}%`} />
          <p>Carbohydrate</p>
        </div>
        <div
          style={{ width: 200, height: 200 }}
          className="flex flex-col items-center gap-3"
        >
          <CircularProgressbar value={calories} text={`${calories}%`} />
          <p>Fats</p>
        </div>
      </div>
    </div>
  );
}

export default NutrientOverview;
