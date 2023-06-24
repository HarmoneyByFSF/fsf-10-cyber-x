import React from "react";
import { Link } from 'react-router-dom';

const IndustriesPage = () => {
  return (
    <div>
      <div className="container" style={{ backgroundColor: 'grey', color: 'white', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <Link to="/newbusiness" style={{ textDecoration: 'none', color: 'white' }}>
          <img src="/images/back.png" style={{ width: '40px', height: '40px', marginRight: '10px', marginLeft: '10px' }} />
        </Link>
        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ margin: '0', fontWeight: 'bold', fontSize: '20px' }}>Industries</p>
        </div>
      </div>
      <Link to="/business" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/robotics.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Robotics</b></p>
            <p style={{ margin: '0' }}>Demand 40%</p>
          </div>
          <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/carmanufacturer" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/carmanufacturing.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Car Manufacturer</b></p>
            <p style={{ margin: '0' }}>Demand 80%</p>
          </div>
          <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/geneticlaboratory" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/geneticlaboratory.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Genetic Laboratory</b></p>
            <p style={{ margin: '0' }}>Demand 40%</p>
          </div>
          <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/semiconductor" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/semiconductor.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Semi-Conductor</b></p>
            <p style={{ margin: '0' }}>Demand 60%</p>
          </div>
          <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
    </div>
  );
};

export default IndustriesPage;
