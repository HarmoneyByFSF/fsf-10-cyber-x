// TopAppBar.js
import React from 'react';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';
import audio from './audio.mp3';
import './TopAppBar.css';

function TopAppBar({ earnings, character, age }) {
  const characterImage = character.images.find(
    (image) => age >= image.ageRange[0] && age <= image.ageRange[1]
  );

  const [isAudioOn, setIsAudioOn] = React.useState(false);

  const handleAudioToggle = () => {
    setIsAudioOn((prevIsAudioOn) => !prevIsAudioOn);
  };

  return (
    <div className="top-app-bar">
      <div className="left-section">
        <div className="profile-container">
          <img className="profile-pic" src={characterImage.image} alt="Profile" />
          <div className="profile-info">
            <div className="profile-name">{character.name}</div>
            <div className="profile-age">Age: {age}</div>
            <div className="profile-occupation">Mauritian</div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="balance-container">
          <div className="audio-icon" onClick={handleAudioToggle}>
            {isAudioOn ? <FaVolumeMute /> : <FaMusic />}
          </div>
          <div className="balance-text">Bank Balance</div>
          <div className="balance-amount">RS {earnings}</div>
        </div>
      </div>
      {isAudioOn && <audio src={audio} autoPlay loop />}
    </div>
  );
}

export default TopAppBar;
