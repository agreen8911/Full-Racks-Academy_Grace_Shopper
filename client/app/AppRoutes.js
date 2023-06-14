import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AllProducts from '../features/allProducts/AllProducts';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from './store';
import AllStrength from '../features/strengthEquipment/AllStrength';
import AllCardio from '../features/cardioEquipment/AllCardio';
import AllRecovery from '../features/recoveryEquipment/AllRecovery';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />

         
         <Route path="/strengthequipment" element={<AllStrength/>}/>
         <Route path="/cardioequipment" element={<AllCardio/>}/>
         <Route path="/recoveryequipment" element={<AllRecovery/>}/>
         <Route path="/home" element={<Home/>}/>
          <Route 
            path="/allProducts"
            element={<AllProducts/> }
          />

        </Routes>
      
      )}
    </div>
  );
};

export default AppRoutes;
