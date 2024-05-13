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
      <div>
        <Navigation /> {/* Navigation is placed outside of Routes */}
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/company" element={<Company />} />
          <Route path="*" element={<Home />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
    
   
    
  );
};

export default App;
