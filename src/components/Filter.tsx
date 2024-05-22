import React from "react";

const Filter: React.FC = () => {
  return (
    <div className="flex justify-between p-4">
      <input
        type="text"
        placeholder="Filter Meals..."
        className="p-2 border rounded w-full md:w-1/2 mr-2"
      />
      <input
        type="text"
        placeholder="Filter Workouts..."
        className="p-2 border rounded w-full md:w-1/2"
      />
    </div>
  );
};

export default Filter;
