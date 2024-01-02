import React from "react";

const Deductiontable = () => {
  return (
    <div className="border">
      <p
        className="font-[600] text-[20px] px-3 lg:px-[45px] py-[20px] border-b
            "
      >
        Deduction
      </p>
      <p className="font-[500] text-[16px] px-3 lg:px-[45px] py-[20px] flex justify-between border-b">
        <span>Lunch Payment after Subsidy</span>
        <span>0.00</span>
      </p>
      <p className="font-[500] text-[16px] px-3 lg:px-[45px] py-[20px] flex justify-between border-b">
        <span>Leave</span>
        <span>0.00</span>
      </p>

      <p className="font-[600] text-[16px] px-3 lg:px-[45px] py-[20px] flex justify-between">
        <span>Total Deduction</span>
        <span>0.00</span>
      </p>
    </div>
  );
};

export default Deductiontable;
