import React from "react";

interface ProgressProps {
  dailyLimit: number;
  meals: { name: string; calories: number }[];
  workouts: { name: string; calories: number }[];
}

const Progress: React.FC<ProgressProps> = ({ dailyLimit, meals, workouts }) => {
  const caloriesConsumed = meals.reduce((acc, meal) => acc + meal.calories, 0);
  const caloriesBurned = workouts.reduce(
    (acc, workout) => acc + workout.calories,
    0
  );
  const progress = ((caloriesConsumed - caloriesBurned) / dailyLimit) * 100;

  let progressBarColor = "bg-green-600";
  if (progress >= 50 && progress <= 75) {
    progressBarColor = "bg-yellow-500";
  } else if (progress > 75) {
    progressBarColor = "bg-red-600";
  }

  return (
    <div className="p-4">
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className={`${progressBarColor} h-4 rounded-full`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
