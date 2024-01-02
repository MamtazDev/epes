import React from "react";

const DeleteSalary = () => {
  return (
    <div className="">
      <p className="font-[600] text-[16px] leading-[24px] text-white text-center py-[17px] bg-[#323657]">
      Delete Salary
      </p>
      <div className="p-3 lg:py-[40px] lg:px-[45px]">
        <p className="mb-[34px] font-[600] text-[16px] leading-[24px] text-center">Are you sure you want to delete this record?</p>

        <div className="flex gap-[30px] justify-center">
          <button
            className="bg-[#323657] text-white py-[9.5px] px-[38px] rounded-[4px] text-[14px] font-[500]"
            type=""
          >
            Delete
          </button>
          <button
            className=" bg-white border border-[#323657] text-[#323657] py-[9.5px] px-[38px] rounded-[4px] text-[14px] font-[500]"
            type=""
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteSalary;
