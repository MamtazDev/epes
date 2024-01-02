import React from "react";
import opedia from "../../assets/logo/opedia.png";
import Deductiontable from "./Deductiontable";
import EarningTable from "./EarningTable";
import GrossPay from "./GrossPay";

const Payslip = () => {
  return (
    <div className="p-4 lg:p-[56px]">
      <p className="text-center text-[#323657] font-[600] text-[22px] mb-[56px]">
        PAYSLIP ADVICE
      </p>
      <div className="bg-white rounded-[4px] p-4 lg:p-[42px]">
        <div className="flex flex-col lg:flex-row justify-between mb-[72px]">
          <div>
            <img className="mb-[10px]" src={opedia} alt="" />
            <p className="text-[#323657] font-[600] text-[20px] mb-[25px] ">
              Opedia Technologies Limited
            </p>
            <div className="flex gap-5 text-[16px] font-[500]">
              <div className="flex flex-col gap-y-[10px]">
                <p>Name</p>
                <p>Department </p>
                <p>Position </p>
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <p>
                  <span className="mr-5">:</span> Nusrat Jahan
                </p>
                <p>
                  <span className="mr-5">:</span> Web Development
                </p>
                <p>
                  <span className="mr-5">:</span> Frontend Developer
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[20px] font-[600] mb-[21px]  ">
              Employee ID : OPD/EMP/2132
            </p>
            <div className="text-[16px] font-[500]">
              <p className="mb-[15px]">Salary Month : March, 2021 </p>
              <p>Working Days: 25</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[71px] mb-[70px]">
            
        <EarningTable/>
        <Deductiontable/>
        </div>
        <GrossPay/>
      </div>
    </div>
  );
};

export default Payslip;
