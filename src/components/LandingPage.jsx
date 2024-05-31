import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LandingPage() {
  const [selectedOption, setSelectedOption] = useState(0);
  const menuOptions = ['Enter', 'Contact', 'Settings'];
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setSelectedOption((prevOption) => (prevOption + 1) % menuOptions.length);
    } else if (event.key === 'ArrowUp') {
      setSelectedOption((prevOption) => (prevOption - 1 + menuOptions.length) % menuOptions.length);
    } else if (event.key === 'Enter') {
      handleSelectOption();
    }
  };

  const handleSelectOption = () => {
    const option = menuOptions[selectedOption];
    if (option === 'Enter') {
      // Implement your enter functionality here
    } else if (option === 'Contact') {
      navigate('/contact');
    } else if (option === 'Settings') {
      navigate('/settings');
    }
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex="0" className="flex-col items-center justify-center h-screen">
      <h1 className="text-center mb-8">This website contains information about the work and contact details of James Daniel Whitford.</h1>
      <div className="space-y-4">
        {menuOptions.map((option, index) => (
          <div
            key={index}
            className={`text-center ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => {
              setSelectedOption(index);
              handleSelectOption();
            }}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="horizontal-buttons">
        <button className="minus-button hidden">-</button>
        <div className="arrow-buttons">
          <button
            onClick={() => setSelectedOption((prevOption) => (prevOption - 1 + menuOptions.length) % menuOptions.length)}
            disabled={selectedOption === 0}
          >
            ▲
          </button>
          <button
            onClick={() => setSelectedOption((prevOption) => (prevOption + 1) % menuOptions.length)}
            disabled={selectedOption === menuOptions.length - 1}
          >
            ▼
          </button>
        </div>
        <button className="plus-button" onClick={handleSelectOption}>+</button>
      </div>
    </div>
  );
}

export default LandingPage;