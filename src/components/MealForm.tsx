import React, { useState } from "react";

interface MealFormProps {
  addMeal: (meal: { name: string; calories: number }) => void;
}

const MealForm: React.FC<MealFormProps> = ({ addMeal }) => {
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");

  const handleAddMeal = () => {
    if (meal && calories) {
      addMeal({ name: meal, calories: parseInt(calories) });
      setMeal("");
      setCalories("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddMeal();
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <input
        type="text"
        placeholder="Enter Meal or Item"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        onKeyPress={handleKeyPress}
        className="p-2 border rounded w-full mb-2"
      />
      <input
        type="number"
        placeholder="Enter Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        onKeyPress={handleKeyPress}
        className="p-2 border rounded w-full mb-2"
      />
      <button
        onClick={handleAddMeal}
        className="bg-green-600 text-white py-2 px-4 rounded w-full"
      >
        Add Meal Item
      </button>
    </div>
  );
};

export default MealForm;
