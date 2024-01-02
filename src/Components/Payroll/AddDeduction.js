import React from "react";

const AddDeduction = () => {
  return (
    <div className="">
      <p className="font-[600] text-[16px] leading-[24px] text-white text-center py-[17px] bg-[#323657]">
      Add Deduction
      </p>
      <form className="p-3 lg:py-[40px] lg:px-[45px]">
        <div>
          <input
            placeholder="Name"
            type="text"
            className="input w-full border-0 h-[53px] bg-white input_shadow mb-[15px]"
          />
        </div>
        <div>
          <select className="select input_shadow h-[53px] w-full border-0 bg-white mb-[15px]">
            <option>Unit calculation</option>
            <option>Prayer</option>
            <option>Class</option>
            <option>Workshop</option>
            <option>Seminar</option>
          </select>
        </div>

        <div className="input-group mb-[15px] h-[53px]">
          <span className="bg-[#E9ECEF] text-[16px] font-[400] px-[px]">$</span>
          <input
            type="number"
            placeholder="Unit Amount"
            className="input w-full h-[53px] border-0 bg-white input_shadow"
          />
          <span className="bg-[#E9ECEF]  text-[16px] font-[400] px-[px]">
            .00
          </span>
        </div>

        <div>
          <select className="select input_shadow h-[53px] w-full border-0 bg-white mb-[15px]">
            <option>Assigned to</option>
            <option>Prayer</option>
            <option>Class</option>
            <option>Workshop</option>
            <option>Seminar</option>
          </select>
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

export default AddDeduction;
