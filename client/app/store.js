import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import allProductsSlice from '../features/allProducts/allProductsSlice';

const store = configureStore({
  reducer: { auth: authReducer, allProducts: allProductsSlice },
  allProducts: allProductsSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
