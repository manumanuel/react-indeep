import { useState } from "react";

import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useGetOnlineStatus from "../utils/useGetOnlineStatus";

const HeaderComponent = () => {
  const [btnLogInOut, setBtnLogInOut] = useState("Login");
  const onlineStatus = useGetOnlineStatus();
  //console.log(onlineStatus);

  return (
    <div className="flex justify-between">
      <div className="w-20">
        <img className="logo" src={LOGO_URL} />
      </div>
      <ul className="flex p-4 m-4 items-center">
        <li className="px-6">
          <h3>Online Status: {onlineStatus ? "online🔼" : "offline📵"} </h3>
        </li>
        <li className="px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-2">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="px-2">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-2">Cart</li>
        <button
          className="px-4"
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
  );
};

export default HeaderComponent;
