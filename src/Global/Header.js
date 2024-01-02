import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/epes-logo.png";

const Header = () => {
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="header__section bg-white shadow sticky top-0 z-50">
      <div className="flex justify-between gap-2 items-center">
        <Link to="/" className="logo">
          <img className="local__img" src={logo} alt="" />
        </Link>
        <div className="middle__head">
          {clock >= "9:31:00 AM" ? (
            <p className="bg-[#F60007] text-white rounded-lg">
              You are late! Today’s login time {clock}
            </p>
          ) : (
            <p></p>
          )}
        </div>
        <div className="Timer">
          <p className="font-bold">{clock}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
