import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from'react-router-dom';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <div>

      </div>
      
      <div className='HPuser-container'>
        <h3>Welcome, {username}</h3>
      </div>
      <div className='HPequipmentTypes-section'>
        <div id='HPstrength-products'> 
          <Link to="/strengthequipment"><h1>STRENGTH EQUIPMENT</h1></Link>
        </div>
        <div id='HPcardio-products'> 
          <Link to="/cardioequipment"><h1>CARDIO EQUIPMENT</h1></Link>
        </div>
        <div id='HPrecovery-products'> 
          <Link to="/recoveryequipment"><h1>RECOVERY EQUIPMENT</h1></Link>
        </div>
        <div id='HPallProducts'> 
          <Link to="/allProducts"><h1>View All Products</h1></Link>
        </div>
        <div id='HPcartView'> 
          <Link to="/cartdisplay"><h1>Cart</h1></Link>
        </div>
      </div>

    </div>
  );
};

export default Home;
