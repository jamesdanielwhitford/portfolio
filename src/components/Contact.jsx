import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import "../App.css";

const Contact = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleEmail = () => {
    window.location.href = "mailto:james.whitford0@gmail.com";
  };

  return (
    <div className="h-screen flex flex-col justify-start items-center space-y-6 bg-gray-200 text-center" style={{ paddingTop: '22vh' }}>
      <h1 className="mb-10">Contact James Daniel Whitford through email:</h1>
      <div className="space-y-6">
        <div className="menu-item selected">
          james.whitford0@gmail.com
        </div>
      </div>
      <div className="horizontal-buttons">
        <button onClick={handleBack} className="minus-button">-</button>
        <div className="arrow-buttons">
          <button className="hidden">▲</button>
          <button className="hidden">▼</button>
        </div>
        <button onClick={handleEmail} className="plus-button">+</button>
      </div>
    </div>
  );
};

export default Contact;