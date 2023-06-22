import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AllProducts from '../features/allProducts/AllProducts';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from './store';
import SingleProduct from '../features/SingleProduct/SingleProduct';
import AllStrength from '../features/strengthEquipment/AllStrength';
import AllCardio from '../features/cardioEquipment/AllCardio';
import AllRecovery from '../features/recoveryEquipment/AllRecovery';
import AdminView from '../features/adminView/AdminView';
import EditUser from '../features/editUser/EditUser';
import EditProduct from "../features/editProduct/EditProduct"
import CartView from '../features/CartDisplay/Cartview';

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

          <Route path="/home" element={<Home />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} /> {/* Add this line */}
          <Route path="/strengthequipment" element={<AllStrength/>}/>
          <Route path="/cardioequipment" element={<AllCardio/>}/>
          <Route path="/recoveryequipment" element={<AllRecovery/>}/>
          <Route path="/allProducts" element={<AllProducts/> }/>
          <Route path="/adminview" element={<AdminView/> }/>
          <Route path="/adminview/:id" element={<EditUser/> }/>
          <Route path="/adminviewproduct/:id" element={<EditProduct/> }/>
          <Route path="/cartdisplay/:userId" element={<CartView/>}/>          
        </Routes>
      ) : (
        <Routes>
          {/* <Route path="/*" element={<AuthForm name="login" displayName="Login" />} /> */}
          <Route path="/login" element={<AuthForm name="login" displayName="Login" />} />
          <Route path="/signup" element={<AuthForm name="signup" displayName="Sign Up" />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} /> {/* Add this line */}

          <Route path="/home" element={<Home />} />
          <Route path="/strengthequipment" element={<AllStrength/>}/>
          <Route path="/cardioequipment" element={<AllCardio/>}/>
          <Route path="/recoveryequipment" element={<AllRecovery/>}/>
          <Route path="/allProducts" element={<AllProducts/> }/>
          <Route path="/cartdisplay/" element={<CartView/>}/> 
        </Routes>
      ) 


        
      
      }
    </div>
  );
};

export default AppRoutes;
