import React from "react";
import { Link } from 'react-router-dom';

const BusinessPage = () => {
  return (
    <div>
      <div className="container" style={{ backgroundColor: 'grey', color: 'white', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <Link to="/industries" style={{ textDecoration: 'none', color: 'white' }}>
          <img src="/images/back.png" style={{ width: '40px', height: '40px', marginRight: '10px', marginLeft: '10px' }} />
        </Link>
        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ margin: '0', fontWeight: 'bold', fontSize: '20px' }}>Business</p>
        </div>
      </div>
      <Link to="/ceoandroidrobotics" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/portfolio.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>CEO of Android Robotics</b></p>
            <p style={{ margin: '0' }}>Customer rating</p>
          </div>
          <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/roboticsindustry" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/robotics.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Robotics (Industry)</b></p>
            <p style={{ margin: '0' }}>Demand 40%</p>
          </div>
          <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <div className="container" style={{ backgroundColor: '#51461D', color: 'white', border: '1px solid black', height: '20px', display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: 'auto' }}>
          <p style={{ textAlign: 'center', margin: '0' }}><b>Product</b></p>
        </div>
      </div>
      <Link to="/product" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/boxchoice.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>People’s Choice Android</b></p>
            <p style={{ margin: '0' }}>Rs 400,000,000 Annual sales</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <div className="container" style={{ backgroundColor: '#51461D', color: 'white', border: '1px solid black', height: '20px', display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: 'auto' }}>
          <p style={{ textAlign: 'center', margin: '0' }}><b>Activities</b></p>
        </div>
      </div>
      <Link to="/annualreports" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/Productionplan.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Annual Reports</b></p>
            <p style={{ margin: '0' }}>View your annual reports</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/balancesheet" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/balancesheet.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Balance Sheet (Rs 1.014 Billion)</b></p>
            <p style={{ margin: '0' }}>Examine your company’s finances</p>
          </div>
          <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/employees" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/employees.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Employees</b></p>
            <p style={{ margin: '0' }}>View/ Hire more employees</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/facilities" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/facilities.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Facilities</b></p>
            <p style={{ margin: '0' }}>Manage your plants</p>
          </div>
          <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/invest" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/Business.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Invest</b></p>
            <p style={{ margin: '0' }}>Invest more money in the business</p>
          </div>
          <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
    </div>
  );
};

export default BusinessPage;
