import React from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = React.useState(0);
  const options = ["Language", "Controls", "Filters", "Style"];

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setSelectedOption((prevOption) => (prevOption + 1) % options.length);
    } else if (event.key === "ArrowUp") {
      setSelectedOption((prevOption) => (prevOption - 1 + options.length) % options.length);
    } else if (event.key === "Enter") {
      handleOptionSelect();
    }
  };

  const handleOptionSelect = () => {
    const selected = options[selectedOption];
    // Implement navigation or actions for each option here
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isTopMostItem = selectedOption === 0;
  const isBottomMostItem = selectedOption === options.length - 1;

  return (
    <div className="flex-col h-screen bg-gray-200 text-center">
      <div className="space-y-4">
        <h1 className="mb-12 mt-48">Settings</h1>
        {options.map((option, index) => (
          <div
            key={option}
            className={`${
              index === selectedOption ? "selected" : ""
            }`}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="horizontal-buttons">
        <button className="minus-button" onClick={() => navigate(-1)}>-</button>
        <div className="arrow-buttons">
          <button
            className="up-button"
            style={{ visibility: isTopMostItem ? 'hidden' : 'visible' }}
            onClick={() => setSelectedOption((prevOption) => (prevOption - 1 + options.length) % options.length)}
          >
            ▲
          </button>
          <button
            className="down-button"
            style={{ visibility: isBottomMostItem ? 'hidden' : 'visible' }}
            onClick={() => setSelectedOption((prevOption) => (prevOption + 1) % options.length)}
          >
            ▼
          </button>
        </div>
        <button className="plus-button" onClick={handleOptionSelect}>+</button>
      </div>
    </div>
  );
};

export default SettingsPage;