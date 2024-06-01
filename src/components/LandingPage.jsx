import React, { useState, useEffect } from 'react';
import '../index.css';

const LandingPage = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const menuOptions = ['Enter', 'Contact', 'Settings'];

  const handleArrowClick = (direction) => {
    if (direction === 'left' || direction === 'right') {
      // No functionality for left and right arrows on the landing page
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
      // No back functionality on the landing page
    }
  };

  const handleSelect = () => {
    const selected = menuOptions[selectedOption];
    if (selected === 'Enter') {
      window.location.href = '/blog'; // Navigate to blog
    } else if (selected === 'Contact') {
      window.location.href = '/contact';
    } else if (selected === 'Settings') {
      window.location.href = '/settings';
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
            onClick={() => {
              setSelectedOption(index);
              handleSelect();
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="horizontal-buttons">
        <button className="minus-button hidden" style={{ visibility: 'hidden' }}>-</button> {/* Hidden minus button */}
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

export default LandingPage;