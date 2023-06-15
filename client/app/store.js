import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import singleProductSlice from '../features/SingleProduct/SingleProductSlice';
import allStrengthSlice from '../features/strengthEquipment/allStrengthSlice';
import allCardioSlice from '../features/cardioEquipment/allCardioSlice';
import allRecoverySlice from '../features/recoveryEquipment/allRecoverySlice';
import allProductsSlice from '../features/allProducts/allProductsSlice';

const store = configureStore({
  reducer: { 
    auth: authReducer, 
    allStrength: allStrengthSlice,
    allCardio: allCardioSlice,
    allRecovery: allRecoverySlice,
    allProducts: allProductsSlice,
    singleProduct: singleProductSlice
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
