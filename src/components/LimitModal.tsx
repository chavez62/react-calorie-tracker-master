import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface LimitModalProps {
  isOpen: boolean;
  onClose: () => void;
  setDailyLimit: (limit: number) => void;
  currentLimit: number;
}

const LimitModal: React.FC<LimitModalProps> = ({
  isOpen,
  onClose,
  setDailyLimit,
  currentLimit,
}) => {
  const [limit, setLimit] = useState(currentLimit);

  useEffect(() => {
    if (isOpen) {
      setLimit(currentLimit); // Ensure the input field is initialized with the current limit
    }
  }, [isOpen, currentLimit]);

  const handleSave = () => {
    setDailyLimit(limit);
    onClose();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Allow empty value or numerical value
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setLimit(Number(value));
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSave();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Set Daily Limit</h2>
          <button onClick={onClose} className="text-gray-500">
            <FaTimes />
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Daily Calorie Limit</label>
          <input
            type="text"
            value={limit === 0 ? "" : limit}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="p-2 border rounded w-full"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-green-600 text-white py-2 px-4 rounded w-full"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default LimitModal;
