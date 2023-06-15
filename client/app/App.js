import React from 'react';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes /> {/* Uncomment this line to include the AppRoutes component */}
    </div>
  );
};

export default App;
