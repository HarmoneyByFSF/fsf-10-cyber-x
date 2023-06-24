import React from "react";
import { Link } from 'react-router-dom';

const ActivitiesPage = () => {
  return (
    <div>
      <div className="container" style={{ backgroundColor: 'royalblue', color: 'white', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <img src="/images/cross.png" style={{ width: '50px', height: 'px', marginRight: '10px', marginLeft: '10px' }} />
        </Link>
        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ margin: '0', fontWeight: 'bold', fontSize: '20px' }}>Activities</p>
        </div>
      </div>
      <Link to="/shopping" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#E8E8E8', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/shopping.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Shopping</b></p>
            <p style={{ margin: '0' }}>Go shopping</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/images/" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#E8E8E8', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/wedding.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Wedding</b></p>
            <p style={{ margin: '0' }}>(Marry with Someone)</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#E8E8E8', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/entertainment.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Entertainment</b></p>
            <p style={{ margin: '0' }}>(make you feel happy)</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#E8E8E8', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/doctor.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Doctor</b></p>
            <p style={{ margin: '0' }}>( visit the doctor )</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/quizgame" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#E8E8E8', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/Quiz.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Quiz</b></p>
            <p style={{ margin: '0' }}>(Improve your financial knowledge and earn money)</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
    </div>
  );
};

export default ActivitiesPage;
