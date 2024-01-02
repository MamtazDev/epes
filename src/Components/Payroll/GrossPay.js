import React from "react";

const GrossPay = () => {
  return (
    <div className="border">
      <p className="font-[500] text-[16px] px-3 lg:px-[45px] py-[20px] flex justify-between border-b">
        <span>Salary Info</span>
        <span>10000</span>
      </p>
      <p className="font-[500] text-[16px]  px-3 lg:px-[45px] py-[20px] flex justify-between border-b">
        <span>Current Month Earnings</span>
        <span>10000</span>
      </p>
      <p className="font-[500] text-[16px] px-3 lg:px-[45px] py-[20px] flex justify-between border-b">
        <span>YTD Earnings</span>
        <span>10000</span>
      </p>
    
      <p className="font-[600] text-[16px] px-3 lg:px-[45px] py-[20px] flex justify-between">
        <span>Gross Pay </span>
        <span>10000</span>
      </p>
    </div>
  );
};

export default GrossPay;
