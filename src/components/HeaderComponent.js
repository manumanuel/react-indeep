import { useState } from "react";

import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  const [btnLogInOut, setBtnLogInOut] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="btnLogBtn"
            onClick={() => {
              btnLogInOut === "Login"
                ? setBtnLogInOut("Logout")
                : setBtnLogInOut("Login");
            }}
          >
            {btnLogInOut}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
