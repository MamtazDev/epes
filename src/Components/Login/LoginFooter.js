import React from "react";

const LoginFooter = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#323657] pb-3 pt-4">
      <div className="container mx-auto text-white flex flex-col lg:flex-row justify-between py-[30px]">
        <div>
          <p className="text-[24px] font-[600]">Employee Performance Evaluation System</p>
          <p className="text-[18px] font-[400]">copyright {year}.All rights reserved</p>
        </div>
        <div className="lg:text-end">
          <p className="text-[24px] font-[600]">Contact</p>
          <p  className="text-[18px] font-[400]">office@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default LoginFooter;
