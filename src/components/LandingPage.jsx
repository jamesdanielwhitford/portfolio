import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LandingPage() {
  const [selectedOption, setSelectedOption] = useState(0);
  const menuOptions = ['Enter', 'Contact', 'Settings'];
  const navigate = useNavigate();

  const handleSelectOption = () => {
    switch (selectedOption) {
      case 0:
        navigate('/enter');
        break;
      case 1:
        navigate('/contact');
        break;
      case 2:
        navigate('/settings');
        break;
      default:
        break;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowUp') {
      setSelectedOption((prevOption) => (prevOption - 1 + menuOptions.length) % menuOptions.length);
    } else if (event.key === 'ArrowDown') {
      setSelectedOption((prevOption) => (prevOption + 1) % menuOptions.length);
    } else if (event.key === 'Enter') {
      handleSelectOption();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [selectedOption]);

  return (
    <div className="h-screen flex-col items-center justify-center">
      <div className="description">
        <h1>This website contains information about the work and contact details of James Daniel Whitford.</h1>
      </div>
      <div className="menu-options space-y-4">
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