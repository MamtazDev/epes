import React from "react";

const EarningTable = () => {
  return (
    <div className="border">
      <p
        className="font-[600] text-[20px] px-3 lg:px-[45px] py-[20px] border-b
            "
      >
        Earnings
      </p>
      <p className="font-[500] text-[16px] px-3 lg:px-[45px] py-[20px] flex justify-between border-b">
        <span>Basic Salary (60%)</span>
        <span>6000</span>
      </p>
      <p className="font-[500] text-[16px] px-3 lg:px-[45px] py-[20px] flex justify-between border-b">
        <span>House Rent Allowance (25%)</span>
        <span>2500</span>
      </p>
      <p className="font-[500] text-[16px] px-3 lg:px-[45px] py-[20px] flex justify-between border-b">
        <span>Medical Allowance (10%)</span>
        <span>1000</span>
      </p>
      <p className="font-[500] text-[16px] px-3 lg:px-[45px] py-[20px] flex justify-between border-b">
        <span>Conveyance (5%)</span>
        <span>500</span>
      </p>
      <p className="font-[600] text-[16px] px-3 lg:px-[45px] py-[20px] flex justify-between">
        <span>Total Earnings</span>
        <span>10000</span>
      </p>
    </div>
  );
};

export default EarningTable;
