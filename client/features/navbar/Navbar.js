import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import { selectUser } from '../auth/authSlice';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };
  const user = useSelector(selectUser)
  const isAdmin = user.me.isAdmin

const userId = useSelector((state) => {
  return state.auth.me.id
})

  return (
    <div className='NBmain-Container'>
      <h1 className="NBheader">Full Racks Academy</h1>
      <nav>
        {isLoggedIn ? (
              isAdmin ? (
          <div className='NBlinks'>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to={`/cartdisplay/${userId}`}>Cart/Checkout</Link>

            <Link to="/allProducts">All Products</Link>
            <Link to="/adminview">Admin</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
            {/* check to make sure it is /allproducts vs /products */}
          </div>
              ) : (
                <div className='NBlinks'>
                    {/* The navbar will show these links after you log in */}
                    <Link to="/home">Home</Link>
                    <Link to={`/cartdisplay/${userId}`}>Cart/Checkout</Link>
        
                    <Link to="/allProducts">All Products</Link>
                    {/* <Link to="/adminview">Admin</Link> */}
                    <button type="button" onClick={logoutAndRedirectHome}>
                      Logout
                    </button>
                    {/* check to make sure it is /allproducts vs /products */}
              </div>
              )
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
              <Link to="/cartdisplay">Cart/Checkout</Link>
              {/* Do we want a user who is not logged in to even be able to see the cart option? i put the route as going to signup to force them into an account lol */}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
