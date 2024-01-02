import React  from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/epes-logo.png";

const Login = () => {
  
  return (
    <div className="bg-[#FFFFFF] pt-12">
  
      <div className="container mx-auto login login_page relative">
        <img className="mx-auto" src={logo} alt="" />
        <div className="lg:hidden flex flex-col justify-center items-center gap-y-4">
          <p>
            I D E N T I F Y <br />{" "}
            <span className="ml-12">Y O U R S E L F</span>
          </p>
          <div className="user-btn absolute lg:left-24 top-32 flex items-center justify-center">
            <Link to="/managementLogin" className="text-white text-[24px] ">
              MANAGEMENT{" "}
            </Link>
          </div>
          <div className="user-btn absolute lg:right-24 top-48 flex items-center justify-center">
            <Link to="/employeeLogin" className="text-white text-[24px] ">
              EMPLOYEE{" "}
            </Link>
          </div>
        </div>

        <p className="hidden lg:block text-[40px] absolute left-[35%] pt-[40px]">
          I D E N T I F Y <br /> <span className="ml-44">Y O U R S E L F</span>
        </p>
        <div className="hidden lg:block ">
          <div className="user-btn absolute lg:left-12 top-44 flex items-center justify-center">
            <Link to="/managementLogin" className="text-white text-[24px] ">
              MANAGEMENT{" "}
            </Link>
          </div>
          <div className="user-btn absolute lg:right-8 top-56 flex items-center justify-center">
            <Link to="/employeeLogin" className="text-white text-[24px] ">
              EMPLOYEE{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
