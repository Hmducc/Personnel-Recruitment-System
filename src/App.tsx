// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './scenes/navbar/Home';
import Navigation from './scenes/navbar/Navigation';
import Marketplace from './scenes/navbar/Markerplace';
import Company from './scenes/navbar/Company';

const App: React.FC = () => {
  return (
   
   <Router>
    <Navigation></Navigation>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </Router>
  );
};

export default App;
