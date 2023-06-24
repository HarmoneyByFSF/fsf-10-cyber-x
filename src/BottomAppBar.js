// BottomAppBar.js
import React from 'react';
import './BottomAppBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function BottomAppBar({ handleAddAge }) {
  return (
    <div className="bottom-nav-bar">
      <Link to="/occupation" className="nav-link">
        <img src="/job.png" alt="Job" />   <span className="nav-link-text">Job</span>
      </Link>
      <Link to="/assets" className="nav-link">
        <img src="/assets.png" alt="Assets" />   <span className="nav-link-text">Assets</span>
      </Link>
      <button className="nav-button add-age-button" onClick={handleAddAge}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <Link to="/relationship" className="nav-link">
        <img src="/relationships.png" alt="Relationship" />   <span className="nav-link-text">Relationship</span>
      </Link>
      <Link to="/activities" className="nav-link">
        <img src="/activities.png" alt="Activities" />   <span className="nav-link-text">Activities</span>
      </Link>
    </div>
  );
}

export default BottomAppBar;
