import React from "react";

const AddStaffSalary = () => {
  return (
    <div className="">
      <p className="font-[600] text-[16px] leading-[24px] text-white text-center py-[17px] bg-[#323657]">
        Add Staff Salary
      </p>
      <form className="p-3 lg:py-[40px] lg:px-[45px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] mb-[35px]">
          <div>
            <select className="select input_shadow w-full border-0 bg-white">
              <option>Select Staff</option>
              <option>Prayer</option>
              <option>Class</option>
              <option>Workshop</option>
              <option>Seminar</option>
            </select>
          </div>
          <div>
            <input
              placeholder="Net Salary"
              type="number"
              className="input w-full border-0 bg-white input_shadow"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] mb-[68px]">
          <div>
            <p className="font-[600] text-[16px] leading-[24px] mb-[9px]">
              Earnings
            </p>
            <input
              placeholder=" Basic Salary (60%)"
              type="number"
              className="input w-full border-0 bg-white input_shadow mb-[9px]"
            />
            <input
              placeholder=" House Rent (25%)"
              type="number"
              className="input w-full border-0 bg-white input_shadow mb-[9px]"
            />
            <input
              placeholder="Medical Allowance (10%)"
              type="number"
              className="input w-full border-0 bg-white input_shadow mb-[9px]"
            />
            <input
              placeholder="Conveyance (5%)"
              type="number"
              className="input w-full border-0 bg-white input_shadow mb-[9px]"
            />
            <input
              placeholder="Year End Bonus"
              type="number"
              className="input w-full border-0 bg-white input_shadow mb-[9px]"
            />
            <input
              placeholder="Festive Bonus"
              type="number"
              className="input w-full border-0 bg-white input_shadow mb-[9px]"
            />
            <input
              placeholder="Others"
              type="number"
              className="input w-full border-0 bg-white input_shadow"
            />
          </div>
          <div>
            <p className="font-[600] text-[16px] leading-[24px] mb-[9px]">
              Deductions
            </p>
            <input
              placeholder=" Lunch Payment after Subsidy"
              type="number"
              className="input w-full border-0 bg-white input_shadow mb-[9px]"
            />

            <input
              placeholder="Leave"
              type="number"
              className="input w-full border-0 bg-white input_shadow mb-[9px]"
            />
            <input
              placeholder="Others"
              type="number"
              className="input w-full border-0 bg-white input_shadow"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            className="bg-[#323657] text-white py-[9.5px] px-[38px] rounded-[4px] text-[14px] font-[500]"
            type=""
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStaffSalary;
