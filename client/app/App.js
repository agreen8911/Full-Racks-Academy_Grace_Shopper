import React from 'react';

import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import Home from '../features/home/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <AppRoutes /> */}
      <Home />
    </div>
  );
};

export default App;
