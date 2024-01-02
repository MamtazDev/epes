import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Eye from "../../assets/logo/eye.png"

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  console.log(showPassword);

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email address"
        className="email input w-full shadow-lg mb-4"
      />
       
      <input 
        style={{backgroundImage: `url(${Eye})`,
        cursor:'pointer'
      }}
      onClick={()=>showPassword? setShowPassword(false): setShowPassword(true)}
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="eye input w-full shadow-lg mb-4"
      />
      <NavLink
        to="/dashboard"
        className="w-full btn btn-md bg-[#323657] px-6 normal-case text-white hover:bg-[#323657] hover:text-white"
        type="submit"
      >
        Sign In
      </NavLink>
    </div>
  );
};

export default LoginForm;
