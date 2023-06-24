import React, { useState, useEffect, useRef } from 'react';
import './DisplayPage.css';

function DisplayPage({ age }) {
  const [ageHistory, setAgeHistory] = useState([]);
  const displayRef = useRef(null);

  useEffect(() => {
    setAgeHistory((prevAgeHistory) => [...prevAgeHistory, age]);
    displayRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [age]);

  const getUnlockedItems = (age) => {
    switch (age) {
      case 16:
        return ['Driving License', 'Part-Time Job'];
      case 18:
        return ['Full-Time Job', 'Rent an Apartment', 'Credit Card'];
      case 21:
        return ['Alcohol Purchase', 'Get Married', 'Start a Business'];
      default:
        return [];
    }
  };

  const getAgeMessage = (age) => {
    if (age >= 80) {
      return 'You have reached the end of your life journey. May you rest in peace.';
    }

    switch (age) {
      case 16:
        return 'Congratulations! You turned 16. You can now apply for a Driving License and take up a Part-Time Job.';
      case 18:
        return 'Congratulations! You turned 18. You can now get a Full-Time Job, rent an Apartment, and apply for a Credit Card.';
      case 21:
        return 'Congratulations! You turned 21. You can now purchase Alcohol, get Married, and start a Business.';
      default:
        return `Congratulations! You've reached age ${age}!`;
    }
  };

  const getFinancialStatus = (age) => {
    if (age >= 80) {
      return 'Deceased';
    }

    // Generate random financial status for demonstration purposes
    const financialStatusOptions = ['Wealthy', 'Comfortable', 'Struggling'];
    const randomIndex = Math.floor(Math.random() * financialStatusOptions.length);
    return financialStatusOptions[randomIndex];
  };

  return (
    <div className="display-page">
      <h2 className="title">Life Journey</h2>
      <div className="age-list">
        {ageHistory.map((ageItem, index) => {
          const unlockedItems = getUnlockedItems(ageItem);
          const ageMessage = getAgeMessage(ageItem);
          const financialStatus = getFinancialStatus(ageItem);
          return (
            <div key={index} className="age-item">
              <p className="age-label">Age: {ageItem}</p>
              {unlockedItems.length > 0 && (
                <div>
                  <p className="unlocked-label">Unlocked Items:</p>
                  <ul className="unlocked-items">
                    {unlockedItems.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="message">{ageMessage}</p>
              <p className="financial-status">
                Financial Status: {financialStatus}
              </p>
            </div>
          );
        })}
        <div ref={displayRef}></div>
      </div>
    </div>
  );
}

export default DisplayPage;
