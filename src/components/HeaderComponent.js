import { useState } from "react";

import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useGetOnlineStatus from "../utils/useGetOnlineStatus";

const HeaderComponent = () => {
  const [btnLogInOut, setBtnLogInOut] = useState("Login");
  const onlineStatus = useGetOnlineStatus();
  console.log(onlineStatus);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <h3>Online Status: {onlineStatus ? "online🔼" : "offline📵"} </h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
