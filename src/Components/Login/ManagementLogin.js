import React from 'react';
import LoginFooter from './LoginFooter';
import LoginForm from './LoginForm';
import logo from "../../assets/logo/epes-logo.png";
import { Link } from 'react-router-dom';

const ManagementLogin = () => {
    return (
        <div className="bg-[#F5F5F5]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="dotBg lg:px-12 pb-20 pt-5 bg-[#FBFBFF]">
       <Link to="/">
       <img className="" src={logo} alt="" />
       </Link> 
            <div className="management relative">
            <p className="text-3xl font-bold text-end absolute lg:top-24 lg:right-24 p-2">MANAGEMENT</p>
            </div>
        </div>
        <div className="p-3 my-auto lg:px-12 pb-20 ">
          <div className="flex flex-col gap-y-4 mb-12 text-[#31374D]">
            <p className="login_greetings">Hello!</p>
            <p className='login_content'>United we stand, divided we fall</p>
          </div>
          <LoginForm />
        </div>
      </div>

      <LoginFooter />
    </div>
    );
};

export default ManagementLogin;