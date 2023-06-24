import React from "react";
import { Link } from 'react-router-dom';

const RelationshipPage = () => {
  return (
    <div>
      <div className="container" style={{ backgroundColor: 'royalblue', color: 'white', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <img src="/images/cross.png" style={{ width: '50px', height: '50px', marginRight: '10px', marginLeft: '10px' }} />
        </Link>
        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ margin: '0', fontWeight: 'bold', fontSize: '20px' }}>Relationship</p>
        </div>
      </div>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#E8E8E8', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/JeanPaul.png" style={{width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Jean Doe</b></p>
            <p style={{ margin: '0' }}>(Father)</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/images/" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#E8E8E8', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/AraPaul.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Jane Doe</b></p>
            <p style={{ margin: '0' }}>(Mother)</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#E8E8E8', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/SamWick.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Paul Doe</b></p>
            <p style={{ margin: '0' }}>(Husband)</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container" style={{ backgroundColor: '#E8E8E8', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/JohnWick.png" style={{ width: '40px', height: '40px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Sam Doe</b></p>
            <p style={{ margin: '0' }}>(Son)</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
    </div>
  );
};

export default RelationshipPage;
