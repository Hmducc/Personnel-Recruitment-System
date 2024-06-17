import type { CheckboxProps } from "antd";
import { Checkbox, Input } from "antd";
import React from "react";
import "./Login.css";

const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const Login: React.FC = () => {
  return (
    <div className="main">
      <div className="blur1">
        <div className="login ">
          <div className="">
            <h2 className="login-title poppins">Sign in</h2>
            <div className="inside">
              <form className="login-form">
                <div className="form-group">
                  <h1 className="logintext poppins2">Email or phone number</h1>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <h1 className="logintext poppins2">Password</h1>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="input"
                  />
                  <div className="tick">
                    <Checkbox onChange={onChange} className="checkbox poppins">
                      Remember me
                    </Checkbox>
                  </div>
                </div>

                <button
                  type="submit"
                  className="login-button poppins bg-blue-500"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
