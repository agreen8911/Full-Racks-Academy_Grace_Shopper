import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import allStrengthSlice from '../features/strengthEquipment/allStrengthSlice';
import allCardioSlice from '../features/cardioEquipment/allCardioSlice';
import allRecoverySlice from '../features/recoveryEquipment/allRecoverySlice';

const store = configureStore({
  reducer: { 
    auth: authReducer, 
    allStrength: allStrengthSlice,
    allCardio: allCardioSlice,
    allRecovery: allRecoverySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
