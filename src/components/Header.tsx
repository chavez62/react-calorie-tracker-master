import React from "react";
import { FaUtensils, FaRedo } from "react-icons/fa";

interface HeaderProps {
  resetDay: () => void;
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ resetDay, openModal }) => {
  return (
    <div className="bg-pink-500 p-4 flex justify-between items-center text-white">
      <h1 className="text-2xl flex items-center">
        <FaUtensils className="mr-2" /> Calorie Tracker
      </h1>
      <div className="flex space-x-2">
        <button
          onClick={openModal}
          className="bg-white text-pink-600 py-1 px-4 rounded flex items-center"
        >
          Set Daily Limit
        </button>
        <button
          onClick={resetDay}
          className="bg-white text-pink-600 py-1 px-4 rounded flex items-center"
        >
          <FaRedo className="mr-2" /> Reset Day
        </button>
      </div>
    </div>
  );
};

export default Header;
