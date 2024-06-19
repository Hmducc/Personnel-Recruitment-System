// App.tsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Company from "./scenes/navbar/Company";
import Home from "./scenes/navbar/Home";
import Login from "./scenes/navbar/Login";
import Marketplace from "./scenes/navbar/Markerplace";
import Navigation from "./scenes/navbar/Navigation";
import SignUp from "./scenes/navbar/SignUp";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navigation /> {/* Navigation is placed outside of Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/company" element={<Company />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Home />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
