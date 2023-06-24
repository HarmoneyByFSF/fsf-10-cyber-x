import React from "react";
import { Link } from 'react-router-dom';
const ProductPage = () => {
    return(
        <div>
          <div className="container" style={{ backgroundColor: 'grey', color: 'white', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <Link to="/business" style={{ textDecoration: 'none', color: 'white' }}>
          <img src="/images/back.png" style={{ width: '40px', height: '40px', marginRight: '10px', marginLeft: '10px' }} />
        </Link>
        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ margin: '0', fontWeight: 'bold', fontSize: '20px' }}>Product</p>
        </div>
      </div>
            <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/boxchoice.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ marginRight: '250px' }}>
          <p style={{ margin: '0' }}><b>People’s Choice Android</b></p>
          <p style={{ margin: '0' }}>Customer rating</p>
        </div>
        <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto' , marginRight:'50px'}} />
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/robotics.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ marginRight: '250px' }}>
          <p style={{ margin: '0' }}><b>Robotics (Rs 40,000,000/Unit)</b></p>
          <p style={{ margin: '0' }}>Supplier Quality</p>
        </div>
        <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto' , marginRight:'50px'}} />
      </div>
      <div className="container" style={{ backgroundColor: '#51461D', color: 'white', border: '1px solid black', height: '20px', display: 'flex', alignItems: 'center' }}>
      <div style={{ margin: 'auto' }}>
          <p style={{ textAlign: 'center', margin: '0' }}><b>Activities</b></p>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/supply.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ marginRight: '250px' }}>
          <p style={{ margin: '0' }}><b>New Supply</b></p>
          <p style={{ margin: '0' }}>Look for a new supplier</p>
        </div>
        <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto' , marginRight:'50px'}} />
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/Productionplan.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ marginRight: '250px' }}>
          <p style={{ margin: '0' }}><b>Production Plan</b></p>
          <p style={{ margin: '0' }}>Configure your annual production</p>
        </div>
        <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto' , marginRight:'50px'}} />
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/rebrand.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ marginRight: '250px' }}>
          <p style={{ margin: '0' }}><b>Rebrand</b></p>
          <p style={{ margin: '0' }}>Rebrand the product</p>
        </div>
        <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto' , marginRight:'50px'}} />
      </div>
      <div className="container" style={{ backgroundColor: '#D5CFB1', color: 'black', border: '1px solid black', height: '80px', display: 'flex', alignItems: 'center' }}>
        <img src="/images/retire.png" style={{ width: '25px', height: '25px', marginRight: '30px', marginLeft: '10px' }} />
        <div style={{ marginRight: '250px' }}>
          <p style={{ margin: '0' }}><b>Retire</b></p>
          <p style={{ margin: '0' }}>Retire the product</p>
        </div>
        <img src="/images/point.png" style={{ width: '25px', height: '25px', marginLeft: 'auto' , marginRight:'50px'}} />
      </div>
      </div>
      
    ) 
};
export default ProductPage;