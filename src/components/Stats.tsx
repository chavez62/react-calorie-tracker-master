import React from "react";

interface StatsProps {
  dailyLimit: number;
  meals: { name: string; calories: number }[];
  workouts: { name: string; calories: number }[];
}

const Stats: React.FC<StatsProps> = ({ dailyLimit, meals, workouts }) => {
  const caloriesConsumed = meals.reduce((acc, meal) => acc + meal.calories, 0);
  const caloriesBurned = workouts.reduce(
    (acc, workout) => acc + workout.calories,
    0
  );
  const gainLoss = caloriesConsumed - caloriesBurned;
  const caloriesRemaining = dailyLimit - caloriesConsumed + caloriesBurned;

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-900 text-white p-4 rounded">
          <h2 className="text-2xl text-center">{dailyLimit}</h2>
          <p className="text-center">Daily Calorie Limit</p>
        </div>
        <div className="bg-green-600 text-white p-4 rounded">
          <h2 className="text-2xl text-center">
            {isNaN(gainLoss) ? 0 : gainLoss}
          </h2>
          <p className="text-center">Gain/Loss</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-200 text-gray-900 p-4 rounded">
          <h2 className="text-2xl text-center">{caloriesConsumed}</h2>
          <p className="text-center">Calories Consumed</p>
        </div>
        <div className="bg-gray-200 text-gray-900 p-4 rounded">
          <h2 className="text-2xl text-center">{caloriesBurned}</h2>
          <p className="text-center">Calories Burned</p>
        </div>
        <div className="bg-gray-200 text-gray-900 p-4 rounded">
          <h2 className="text-2xl text-center">{caloriesRemaining}</h2>
          <p className="text-center">Calories Remaining</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
