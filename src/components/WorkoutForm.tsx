import React, { useState } from "react";

interface WorkoutFormProps {
  addWorkout: (workout: { name: string; calories: number }) => void;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({ addWorkout }) => {
  const [workout, setWorkout] = useState("");
  const [calories, setCalories] = useState("");

  const handleAddWorkout = () => {
    if (workout && calories) {
      addWorkout({ name: workout, calories: parseInt(calories) });
      setWorkout("");
      setCalories("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddWorkout();
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <input
        type="text"
        placeholder="Enter Workout"
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
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
        onClick={handleAddWorkout}
        className="bg-orange-600 text-white py-2 px-4 rounded w-full"
      >
        Add Workout
      </button>
    </div>
  );
};

export default WorkoutForm;
