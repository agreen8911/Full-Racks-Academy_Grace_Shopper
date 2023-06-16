import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <h1 className="NBheader">Full Racks Academy</h1>
      <nav>
        {isLoggedIn ? (
          <div className='NBlinks'>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
            <Link to="/cart">Cart icon</Link>
            <Link to="/allProducts">All Products</Link>
            <Link to="/adminview">Admin</Link>
            {/* check to make sure it is /allproducts vs /products */}
          </div>
        ) : (
          <div className="NBlinks">
            <div className="NBlinksLeft">
              <Link to ="/home">Home</Link>
              {/* The navbar will show these links before you log in */}
              <Link to="/allProducts">All Products</Link>
            </div>
            <div className="NBlinksRight">
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
              {/* So do we want to have log in and sign up separate? or do we make the log in page also have the signup option? */}
              <Link to="/signup">Cart(image or icon)</Link>
              {/* Do we want a user who is not logged in to even be able to see the cart option? i put the route as going to signup to force them into an account lol */}
            </div>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
