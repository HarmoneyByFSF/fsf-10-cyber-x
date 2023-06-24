import React from 'react';
import { Link } from 'react-router-dom';

const EducationPage = () => {
  return (
    <div>
      <div className="container" style={{ backgroundColor: 'grey', color: 'white', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <img src="/images/back.png" style={{ width: '40px', height: '40px', marginRight: '10px', marginLeft: '10px' }} />
        </Link>
        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ margin: '0', fontWeight: 'bold', fontSize: '20px' }}>Education</p>
        </div>
      </div>

      <Link to="/investment" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/school.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ flex: '1' }}>
            <p style={{ margin: '0' }}><b>School (+ 6yrs)</b></p>
            <p style={{ margin: '0' }}>Take some local classes</p>
          </div>
          <img src="/images/point.png" style={{ width: '30px', height: '25px' }} />
        </div>
      </Link>

      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center'}}>
        <img src="/images/College.png" style={{ width: '30px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ flex: '1' }}>
          <p style={{ margin: '0' }}><b>College (+ 5years)</b></p>
          <p style={{ margin: '0' }}>Take some local classes</p>
        </div>
        <img src="/images/point.png" style={{ width: '30px', height: '25px' }} />
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center'}}>
        <img src="/images/University.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ flex: '1' }}>
          <p style={{ margin: '0' }}><b>Business University (+ 2yrs)</b></p>
          <p style={{ margin: '0' }}>Study to become a business leader</p>
        </div>
        <img src="/images/point.png" style={{ width: '30px', height: '25px' }} />
        
      </div>
     
    </div>
  );
};

export default EducationPage;
