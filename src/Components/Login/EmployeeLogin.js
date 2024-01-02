import React from "react";
import LoginFooter from "./LoginFooter";
import LoginForm from "./LoginForm";
import employee from "../../assets/login/employee.png";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/epes-logo.png";

const EmployeeLogin = () => {
  return (
    <div className=" bg-[#F5F5F5]">

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="dotBg lg:px-12 pb-20 bg-[#FBFBFF]">
        <Link to="/">
       <img className="pt-4" src={logo} alt="" />
       </Link> 
            <div className="employee relative">
            <p className="text-5xl font-bold text-end absolute lg:top-24 lg:right-24">EMPLOYEE</p>
            </div>
        </div>
        <div className="p-3 my-auto lg:px-12 pb-20  ">
          <div className="flex flex-col gap-y-4 mb-12 text-[#31374D]">
            <p className="text-2xl font-bold">Welcome</p>
            <p>Let your performance be seen and felt than your sound</p>
          </div>
          <LoginForm />
        </div>
      </div>

      <LoginFooter />
    </div>
  );
};

export default EmployeeLogin;
