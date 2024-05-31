import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function ContactPage() {
  const [selectedOption, setSelectedOption] = useState(0);
  const menuOptions = ['james.whitford0@gmail.com'];
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setSelectedOption((prevOption) => (prevOption + 1) % menuOptions.length);
    } else if (event.key === 'ArrowUp') {
      setSelectedOption((prevOption) => (prevOption - 1 + menuOptions.length) % menuOptions.length);
    } else if (event.key === 'Enter') {
      window.location.href = `mailto:${menuOptions[selectedOption]}`;
    }
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex="0" className="flex-col items-center justify-center h-screen">
      <h1 className="text-center mb-8">Contact James Daniel Whitford through email:</h1>
      <div className="space-y-4">
        {menuOptions.map((option, index) => (
          <div
            key={index}
            className={`text-center ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => window.location.href = `mailto:${option}`}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="horizontal-buttons">
        <button className="minus-button hidden" onClick={() => navigate('/')}>-</button>
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
        <button className="plus-button" onClick={() => window.location.href = `mailto:${menuOptions[selectedOption]}`}>+</button>
      </div>
    </div>
  );
}

export default ContactPage;