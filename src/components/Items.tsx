import React from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import MealForm from "./MealForm";
import WorkoutForm from "./WorkoutForm";

interface ItemsProps {
  meals: { name: string; calories: number }[];
  workouts: { name: string; calories: number }[];
  removeMeal: (index: number) => void;
  removeWorkout: (index: number) => void;
  addMeal: (meal: { name: string; calories: number }) => void;
  addWorkout: (workout: { name: string; calories: number }) => void;
}

const Items: React.FC<ItemsProps> = ({
  meals,
  workouts,
  removeMeal,
  removeWorkout,
  addMeal,
  addWorkout,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div>
        <h3 className="text-lg mb-2">Meals / Food Items</h3>
        <MealForm addMeal={addMeal} />
        {meals.map((meal, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center"
          >
            <div>
              <p>{meal.name}</p>
              <p className="text-green-600">{meal.calories} Calories</p>
            </div>
            <button
              onClick={() => removeMeal(index)}
              className="bg-red-600 text-white py-1 px-2 rounded flex items-center"
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-lg mb-2">Workouts</h3>
        <WorkoutForm addWorkout={addWorkout} />
        {workouts.map((workout, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center"
          >
            <div>
              <p>{workout.name}</p>
              <p className="text-orange-600">{workout.calories} Calories</p>
            </div>
            <button
              onClick={() => removeWorkout(index)}
              className="bg-red-600 text-white py-1 px-2 rounded flex items-center"
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
