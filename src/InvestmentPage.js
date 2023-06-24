import React from 'react';
import { Link } from 'react-router-dom';

const InvestmentPage = () => {
  return (
    <div>
      <div className="container" style={{ backgroundColor: 'grey', color: 'white', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <Link to="/assets" style={{ textDecoration: 'none', color: 'white' }}>
          <img src="/images/back.png" style={{ width: '40px', height: '40px', marginRight: '10px', marginLeft: '10px' }} />
        </Link>
        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ margin: '0', fontWeight: 'bold', fontSize: '20px' }}>Investments</p>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/portfolio.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ flex: '1', marginRight: '250px' }}>
          <p style={{ margin: '0', fontSize: '18px' }}><b>Portfolio</b></p>
          <p style={{ margin: '0', fontSize: '14px' }}>Manage your investment portfolio</p>
        </div>
        <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/stats.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ flex: '1', marginRight: '250px' }}>
          <p style={{ margin: '0', fontSize: '18px' }}><b>Stats</b></p>
          <p style={{ margin: '0', fontSize: '14px' }}>View your lifetime performance</p>
        </div>
        <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
      </div>
      <div className="container" style={{ backgroundColor: '#51461D', color: 'white', border: '1px solid black', height: '20px', display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: 'auto' }}>
          <p style={{ textAlign: 'center', margin: '0', fontSize: '16px' }}><b>Tools</b></p>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/financialadvisor.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ flex: '1', marginRight: '250px' }}>
          <p style={{ margin: '0', fontSize: '18px' }}><b>Financial Advisor</b></p>
          <p style={{ margin: '0', fontSize: '14px' }}>Look for a financial advisor</p>
        </div>
        <img src="/images/point.png" style={{ width: '30px', height: '20px', marginLeft: 'auto', marginRight: '50px' }} />
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/financialnews.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ flex: '1', marginRight: '250px' }}>
          <p style={{ margin: '0', fontSize: '18px' }}><b>Financial News</b></p>
          <p style={{ margin: '0', fontSize: '14px' }}>Pick up a newspaper</p>
        </div>
        <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
      </div>
      <div className="container" style={{ backgroundColor: '#51461D', color: 'white', border: '1px solid black', height: '20px', display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: 'auto' }}>
          <p style={{ textAlign: 'center', margin: '0', fontSize: '16px' }}><b>Investment Types</b></p>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/bonds.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ flex: '1', marginRight: '200px' }}>
          <p style={{ margin: '0', fontSize: '18px' }}><b>Bonds</b></p>
          <p style={{ margin: '0', fontSize: '14px' }}>Market Health</p>
        </div>
        <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/crypto.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ flex: '1', marginRight: '250px' }}>
          <p style={{ margin: '0', fontSize: '18px' }}><b>Crypto</b></p>
          <p style={{ margin: '0', fontSize: '14px' }}>Invest in cryptocurrency</p>
        </div>
        <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
      </div>
      
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/stocks.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ flex: '1', marginRight: '250px' }}>
          <p style={{ margin: '0', fontSize: '18px' }}><b>Stocks</b></p>
          <p style={{ margin: '0', fontSize: '14px' }}>Invest in Stocks</p>
        </div>
        <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
      </div>
    </div>
  );
};

export default InvestmentPage;
