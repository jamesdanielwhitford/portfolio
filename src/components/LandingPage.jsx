import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import "../App.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const menuItems = ["Enter", "Contact", "Settings"];

  const handleUp = () => {
    if (selected > 0) setSelected(selected - 1);
  };

  const handleDown = () => {
    if (selected < menuItems.length - 1) setSelected(selected + 1);
  };

  const handleSelect = () => {
    switch (selected) {
      case 0:
        navigate("/blog");
        break;
      case 1:
        navigate("/contact");
        break;
      case 2:
        navigate("/settings");
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-screen flex flex-col justify-start items-center space-y-6 bg-gray-200 text-center" style={{ paddingTop: '22vh' }}>
      <h1 className="mb-10">
        This website contains information about the work and contact details of James Daniel Whitford.
      </h1>
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${selected === index ? "selected" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="horizontal-buttons">
        <button
          className={`minus-button ${selected === 0 ? "invisible" : ""}`}
        >
          -
        </button>
        <div className="arrow-buttons">
          <button
            onClick={handleUp}
            className={`${selected === 0 ? "invisible" : ""}`}
          >
            ▲
          </button>
          <button
            onClick={handleDown}
            className={`${selected === menuItems.length - 1 ? "invisible" : ""}`}
          >
            ▼
          </button>
        </div>
        <button onClick={handleSelect} className="plus-button">+</button>
      </div>
    </div>
  );
};

export default LandingPage;