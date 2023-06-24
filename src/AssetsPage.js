
import React from 'react';
import { Link } from 'react-router-dom';

const AssetsPage = () => {
  return (
    <div>
      <div className="container" style={{ backgroundColor: 'royalblue', color: 'white', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <img src="/images/cross.png" style={{ width: '50px', height: '50px', marginRight: '10px', marginLeft: '10px' }} />
        </Link>
        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ margin: '0', fontWeight: 'bold', fontSize: '20px' }}>Assets</p>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: '#51461D', color: 'white', border: '1px solid black', height: '20px', display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: 'auto' }}>
          <p style={{ textAlign: 'center', margin: '0' }}><b>Tools</b></p>
        </div>
      </div>
      <Link to="/finances" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/portfolio.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Finances</b></p>
            <p style={{ margin: '0' }}>View your finances</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/investment" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/investment.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Investments</b></p>
            <p style={{ margin: '0' }}>Manage your investment portfolio</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <div className="container" style={{ backgroundColor: '#51461D', color: 'white', border: '1px solid black', height: '20px', display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: 'auto' }}>
          <p style={{ textAlign: 'center', margin: '0' }}><b>Real Estate</b></p>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/properties.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ marginRight: '250px' }}>
          <p style={{ margin: '0' }}><b>Properties</b></p>
          <p style={{ margin: '0' }}>Manage your properties</p>
        </div>
        <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
      </div>
      <div className="container" style={{ backgroundColor: '#51461D', color: 'white', border: '1px solid black', height: '20px', display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: 'auto' }}>
          <p style={{ textAlign: 'center', margin: '0' }}><b>Vehicles</b></p>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/driverlicense.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ marginRight: '250px' }}>
          <p style={{ margin: '0' }}><b>Land Rover Discovery (SUV)</b></p>
          <p style={{ margin: '0' }}>Insurance Rs 30,000</p>
        </div>
        <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
      </div>
    </div>
  );
};

export default AssetsPage;