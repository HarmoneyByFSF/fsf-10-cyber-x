import React from "react";
import { Link } from 'react-router-dom';

const ShoppingPage = () => {
    return(
      
      <div>
     
     <div className="container" style={{ backgroundColor: 'grey', color: 'white', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <Link to="/activities" style={{ textDecoration: 'none', color: 'white' }}>
          <img src="/images/back.png" style={{ width: '40px', height: '40px', marginRight: '10px', marginLeft: '10px' }} />
        </Link>
        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ margin: '0', fontWeight: 'bold', fontSize: '20px' }}>Shopping</p>
        </div>
      </div>
        <div className="container" style={{ backgroundColor: '#51461D', color: 'white', border: '1px solid black', height: '20px', display: 'flex', alignItems: 'center' }}>
      <div style={{ margin: 'auto' }}>
          <p style={{ textAlign: 'center', margin: '0' }}><b>Car Dealers</b></p>
        </div>
      </div>
            <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/suv.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ marginRight: '250px' }}>
          <p style={{ margin: '0' }}><b>SUV</b></p>
          <p style={{ margin: '0' }}>Shop for suv</p>
        </div>
        <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto' , marginRight:'50px'}} />
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/cars.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ marginRight: '250px' }}>
          <p style={{ margin: '0' }}><b>cars</b></p>
          <p style={{ margin: '0' }}>Shop for cars</p>
        </div>
        <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto' , marginRight:'50px'}} />
      </div>
      <div className="container" style={{ backgroundColor: '#51461D', color: 'white', border: '1px solid black', height: '20px', display: 'flex', alignItems: 'center' }}>
      <div style={{ margin: 'auto' }}>
          <p style={{ textAlign: 'center', margin: '0' }}><b>Real Estate</b></p>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/house.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ marginRight: '250px' }}>
          <p style={{ margin: '0' }}><b>House Agency</b></p>
          <p style={{ margin: '0' }}>shop for properties</p>
        </div>
        <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto' , marginRight:'50px'}} />
      </div>
      <div className="container" style={{ backgroundColor: '#51461D', color: 'white', border: '1px solid black', height: '20px', display: 'flex', alignItems: 'center' }}>
      <div style={{ margin: 'auto' }}>
          <p style={{ textAlign: 'center', margin: '0' }}><b>Specialty Vehicle Dealers</b></p>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/plane.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ marginRight: '250px' }}>
          <p style={{ margin: '0' }}><b>Aircraft Sales</b></p>
          <p style={{ margin: '0' }}>Insurance rs 30,000</p>
        </div>
        <img src="/images/right.png" style={{ width: '25px', height: '25px', marginLeft: 'auto' , marginRight:'50px'}} />
      </div>
      
      </div>
      
    ) 
};
export default ShoppingPage;