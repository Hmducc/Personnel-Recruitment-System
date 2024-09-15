import React from "react";
import "./Co-Home.css";
import logo from "../../assets/usthlogo.png";

const CoHome: React.FC = () => {
  return (
    <div className="bg-red-300 h-1300">
      <div className="bg-green-300 h-screen">
        <div className="bg-blue-300 co-nav">
          <div className="flex">
            <div>
              <img className="h-16 w-100 bg-green-300 ml-5 " src={logo} />
            </div>
            <div className="co-nav-login">
              <p>Login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoHome;
