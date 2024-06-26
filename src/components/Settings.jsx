import React, { useState, useEffect } from 'react';
import '../index.css';

const Settings = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const menuOptions = ['Change Password', 'Update Email', 'Notification Preferences'];

  const handleArrowClick = (direction) => {
    if (direction === 'left' || direction === 'right') {
      // No functionality for left and right arrows on the settings page
      return;
    }
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
    } else if (event.key === 'Backspace') {
      handleBack();
    }
  };

  const handleSelect = () => {
    const selected = menuOptions[selectedOption];
    if (selected === 'Change Password') {
      // Handle Change Password action
    } else if (selected === 'Update Email') {
      // Handle Update Email action
    } else if (selected === 'Notification Preferences') {
      // Handle Notification Preferences action
    }
  };

  const handleBack = () => {
    window.history.back();
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
        This page allows you to configure your settings.
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
        <button className="minus-button" onClick={handleBack}>-</button>
        <div className="arrow-buttons">
          <button onClick={() => handleArrowClick('left')} className="arrow-left hidden">◀</button>
          <div className="arrow-vertical">
            <button onClick={() => handleArrowClick('up')}>▲</button>
            <button onClick={() => handleArrowClick('down')}>▼</button>
          </div>
          <button onClick={() => handleArrowClick('right')} className="arrow-right hidden">▶</button>
        </div>
        <button className="plus-button" onClick={handleSelect}>+</button>
      </div>
    </div>
  );
};

export default Settings;