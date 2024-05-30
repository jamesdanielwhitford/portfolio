import React, { useState } from 'react';

const Settings = () => {
  const [language, setLanguage] = useState('English');
  const [controls, setControls] = useState({
    keyboard: true,
    screen: false,
    voice: false,
    camera: false,
  });

  const handleControlChange = (control) => {
    setControls((prevControls) => ({
      ...prevControls,
      [control]: !prevControls[control],
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl mb-6 text-center">Settings</h1>
        <div className="mb-6">
          <h2 className="text-xl mb-2">Language</h2>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Chinese">Chinese</option>
            <option value="French">French</option>
          </select>
        </div>
        <div>
          <h2 className="text-xl mb-2">Controls</h2>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={controls.keyboard}
              onChange={() => handleControlChange('keyboard')}
              className="mr-2"
            />
            <label>Keyboard</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={controls.screen}
              onChange={() => handleControlChange('screen')}
              className="mr-2"
            />
            <label>Screen</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={controls.voice}
              onChange={() => handleControlChange('voice')}
              className="mr-2"
            />
            <label>Voice</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={controls.camera}
              onChange={() => handleControlChange('camera')}
              className="mr-2"
            />
            <label>Camera</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;