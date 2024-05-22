import React, { useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Items from "./components/Items";
import Filter from "./components/Filter";
import Progress from "./components/Progress";
import LimitModal from "./components/LimitModal";

const App: React.FC = () => {
  const [dailyLimit, setDailyLimit] = useState(2000);
  const [meals, setMeals] = useState<{ name: string; calories: number }[]>([]);
  const [workouts, setWorkouts] = useState<
    { name: string; calories: number }[]
  >([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const resetDay = () => {
    setDailyLimit(0); // Reset daily limit to 0
    setMeals([]);
    setWorkouts([]);
  };

  const removeMeal = (index: number) => {
    setMeals(meals.filter((_, i) => i !== index));
  };

  const removeWorkout = (index: number) => {
    setWorkouts(workouts.filter((_, i) => i !== index));
  };

  const addMeal = (meal: { name: string; calories: number }) => {
    setMeals([...meals, meal]);
  };

  const addWorkout = (workout: { name: string; calories: number }) => {
    setWorkouts([...workouts, workout]);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header resetDay={resetDay} openModal={openModal} />
      <Stats dailyLimit={dailyLimit} meals={meals} workouts={workouts} />
      <Progress dailyLimit={dailyLimit} meals={meals} workouts={workouts} />
      <Filter />
      <Items
        meals={meals}
        workouts={workouts}
        removeMeal={removeMeal}
        removeWorkout={removeWorkout}
        addMeal={addMeal}
        addWorkout={addWorkout}
      />
      <LimitModal
        isOpen={isModalOpen}
        onClose={closeModal}
        setDailyLimit={setDailyLimit}
        currentLimit={dailyLimit}
      />
    </div>
  );
};

export default App;
