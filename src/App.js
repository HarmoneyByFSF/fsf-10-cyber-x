import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopAppBar from './TopAppBar';
import BottomAppBar from './BottomAppBar';
import DisplayPage from './DisplayPage';
import OccupationPage from './OccupationPage';
import EducationPage from './EducationPage';
import InvestmentPage from './InvestmentPage';
import AssetsPage from './AssetsPage';
import RelationshipPage from './RelationshipPage';
import ActivitiesPage from './ActivitiesPage';
import QuizGame from './quizgame';
import IndustriesPage from './IndustriesPage';
import BussinessPage from './BusinessPage';
import ProductPage from './ProductPage';
import ShoppingPage from './ShoppingPage';
import NewBusinessPage from './NewBusinessPage';

function App() {
  const characters = [
    {
      name: 'Jane Doe',
      images: [
        {
          ageRange: [1, 3],
          image: '/character1-3.jpeg',
        },
        {
          ageRange: [3, 10],
          image: '/character3-10.png',
        },
        {
          ageRange: [10, 20],
          image: '/character10-20.jpeg',
        },
        {
          ageRange: [21, 30],
          image: '/character21-30.jpeg',
        },
        {
          ageRange: [31, 50],
          image: '/character31-50.jpeg',
        },
        {
          ageRange: [51, 60],
          image: '/character51-60.jpeg',
        },
        {
          ageRange: [61, 80],
          image: '/character61+.jpeg',
        },
        {
          ageRange: [81, Infinity],
          image: '/child-profile-pic.png',
        },
      ],
    },
    {
      name: 'John Doe',
      images: [
        {
          ageRange: [1, 3],
          image: '/boy1-3.png',
        },
        {
          ageRange: [3, 10],
          image: '/boy3-10.png',
        },
        {
          ageRange: [10, 20],
          image: '/boy10-20.jpeg',
        },
        {
          ageRange: [21, 30],
          image: '/boy21-30.jpeg',
        },
        {
          ageRange: [31, 50],
          image: '/boy31-50.jpeg',
        },
        {
          ageRange: [51, 60],
          image: '/boy51-60.jpeg',
        },
        {
          ageRange: [61, 80],
          image: '/boy61+.jpeg',
        },
        {
          ageRange: [81, Infinity],
          image: '/child-profile-pic.png',
        },
      ],
    },
  ];
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const currentCharacter = characters[currentCharacterIndex];
  const [age, setAge] = useState(16);
  const [earnings, setEarnings] = useState(80000);

  const handleAddAge = () => {
    setAge((prevAge) => {
      if (prevAge === 80) {
        const nextCharacterIndex = currentCharacterIndex + 1;
        if (nextCharacterIndex < characters.length) {
          setCurrentCharacterIndex(nextCharacterIndex);
        } else {
          setCurrentCharacterIndex(0);
        }
        return 16;
      } else {
        return prevAge + 1;
      }
    });
  };

  const updateEarnings = (earnedAmount) => {
    setEarnings((prevEarnings) => prevEarnings + earnedAmount);
  };

  return (
    <Router>
      <div className="App">
        <TopAppBar character={currentCharacter} age={age} earnings={earnings} />
        <Routes>
          <Route path="/" element={<DisplayPage age={age} />} />
          <Route path="/occupation" element={<OccupationPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/investment" element={<InvestmentPage />} />
          <Route path="/assets" element={<AssetsPage />} />
          <Route path="/relationship" element={<RelationshipPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route
            path="/quizgame"
            element={<QuizGame updateEarnings={updateEarnings} />}
            
          />
          <Route path="/business" element={<BussinessPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/newbusiness" element={<NewBusinessPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/shopping" element={<ShoppingPage />} />
        </Routes>
        <BottomAppBar handleAddAge={handleAddAge} />
      </div>
    </Router>
  );
}

export default App;