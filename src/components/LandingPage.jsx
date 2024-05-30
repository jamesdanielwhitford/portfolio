import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <p className="text-center mb-4">This website contains information about the work and contact details of James Daniel Whitford.</p>
      <button className="mb-2 p-2 border" onClick={() => navigate('/blog')}>Enter</button>
      <button className="mb-2 p-2 border" onClick={() => navigate('/contact')}>Contact</button>
      <button className="mb-2 p-2 border" onClick={() => navigate('/settings')}>Settings</button>
      <div className="flex justify-center mt-4">
        <button className="p-2 mx-2 border">⬇️</button>
        <button className="p-2 mx-2 border">➕</button>
      </div>
    </div>
  );
};

export default LandingPage;