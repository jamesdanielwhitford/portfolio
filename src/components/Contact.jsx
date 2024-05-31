import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function ContactPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex-col items-center justify-center">
      <div className="description text-center">
        <h1>Contact James Daniel Whitford through email:</h1>
      </div>
      <div className="menu-options space-y-4">
        <div className="text-center selected">
          james.whitford0@gmail.com
        </div>
      </div>
      <div className="horizontal-buttons">
        <button className="minus-button" onClick={() => navigate('/')}>-</button>
        <div className="arrow-buttons">
          <button className="hidden">▲</button>
          <button className="hidden">▼</button>
        </div>
        <button className="plus-button" onClick={() => window.location.href = 'mailto:james.whitford0@gmail.com'}>+</button>
      </div>
    </div>
  );
}

export default ContactPage;