import React from 'react';
import { Link } from 'react-router-dom';

const OccupationPage = () => {
  return (
    <div>
      <div className="container" style={{ backgroundColor: 'royalblue', color: 'white', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <img src="/images/cross.png" style={{ width: '50px', height: '50px', marginRight: '10px', marginLeft: '10px' }} />
        </Link>
        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ margin: '0', fontWeight: 'bold', fontSize: '20px' }}>Occupation</p>
        </div>
      </div>

      <Link to="/education" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center'}}>
          <img src="/images/education.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ flex: '1' }}>
            <p style={{ margin: '0' }}><b>Education</b></p>
            <p style={{ margin: '0' }}>Go back to school</p>
          </div>
          <img src="/images/point.png" style={{ width: '30px', height: '25px' }} />
        </div>
      </Link>

      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/Freelance.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ flex: '1' }}>
            <p style={{ margin: '0' }}><b>Freelance Gigs</b></p>
            <p style={{ margin: '0' }}>Make some quick money</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px' }} />
        </div>
      </Link>

      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center'}}>
          <img src="/images/Job.png" style={{width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ flex: '1' }}>
            <p style={{ margin: '0' }}><b>Jobs</b></p>
            <p style={{ margin: '0' }}>Browse full-time job listings</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px' }} />
        </div>
      </Link>

      <Link to="/newbusiness" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/business.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ flex: '1' }}>
            <p style={{ margin: '0' }}><b>Business</b></p>
            <p style={{ margin: '0' }}>Start your business</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px' }} />
        </div>
      </Link>
    </div>
  );
};

export default OccupationPage;
