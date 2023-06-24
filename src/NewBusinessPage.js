import React from "react";
import { Link } from "react-router-dom";

const NewBusinessPage = () => {
  return (
    <div><div className="container" style={{ backgroundColor: 'grey', color: 'white', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
    <Link to="/occupation" style={{ textDecoration: 'none', color: 'white' }}>
      <img src="/images/back.png" style={{ width: '40px', height: '40px', marginRight: '10px', marginLeft: '10px' }} />
    </Link>
    <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ margin: '0', fontWeight: 'bold', fontSize: '20px' }}>New Business</p>
    </div>
  </div>
      
      <Link to="/portfolio" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/portfolio.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Business Center</b></p>
            <p style={{ margin: '0' }}>View your business career</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <div className="container" style={{ backgroundColor: '#51461D', color: 'white', border: '1px solid black', height: '20px', display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: 'auto' }}>
          <p style={{ textAlign: 'center', margin: '0' }}><b>Product</b></p>
        </div>
      </div>
      <Link to="/acquisition" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/acquisition.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Acquisition</b></p>
            <p style={{ margin: '0' }}>Buy an existing business</p>
          </div>
          <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
      <Link to="/industries" style={{ textDecoration: 'none' }}>
        <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
          <img src="/images/startup.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
          <div style={{ marginRight: '250px' }}>
            <p style={{ margin: '0' }}><b>Startup</b></p>
            <p style={{ margin: '0' }}>Start up your own business</p>
          </div>
          <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto', marginRight: '50px' }} />
        </div>
      </Link>
    </div>
  );
};

export default NewBusinessPage;
