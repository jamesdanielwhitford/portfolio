import React, { useState, useEffect } from 'react';
import '../index.css';

const LandingPage = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const menuOptions = ['Enter', 'Contact', 'Settings'];

  const handleArrowClick = (direction) => {
    setSelectedOption((prev) =>
      direction === 'down'
        ? (prev + 1) % menuOptions.length
        : (prev - 1 + menuOptions.length) % menuOptions.length
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      handleArrowClick('down');
    } else if (event.key === 'ArrowUp') {
      handleArrowClick('up');
    } else if (event.key === 'Enter') {
      handleSelect();
    }
  };

  const handleSelect = () => {
    const selected = menuOptions[selectedOption];
    if (selected === 'Enter') {
      // Navigate to Enter
    } else if (selected === 'Contact') {
      // Navigate to Contact
    } else if (selected === 'Settings') {
      // Navigate to Settings
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedOption]);

  return (
    <div className="h-screen bg-gray-200 container">
      <div className="description">
        This website contains information about the work and contact details of James Daniel Whitford.
      </div>
      <div className="menu-options">
        {menuOptions.map((option, index) => (
          <button
            key={option}
            className={index === selectedOption ? 'highlighted' : ''}
            onClick={() => setSelectedOption(index)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="horizontal-buttons">
        <button className="minus-button">-</button>
        <div className="arrow-buttons">
          <button onClick={() => handleArrowClick('up')}>▲</button>
          <button onClick={() => handleArrowClick('down')}>▼</button>
        </div>
        <button className="plus-button" onClick={handleSelect}>+</button>
      </div>
    </div>
  );
};

export default LandingPage;