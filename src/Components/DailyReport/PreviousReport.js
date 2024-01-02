import React from "react";
import { NavLink } from "react-router-dom";

const PreviousReport = () => {
  const options = [
    {
      title: "Total Days of Report",
      value: 147,
      background:
        "bg-gradient-to-r from-[#905FF8] to-[#956FE8]  p-5 rounded-lg",
    },
    {
      title: "Available Days of Report",
      value: 52,
      background:
        "bg-gradient-to-r from-[#15AC9A] to-[#61BE93]  p-5 rounded-lg",
    },
    {
      title: "Missing Days of Report",
      value: 32,
      background:
        "bg-gradient-to-r from-[#AF1945] to-[#C3336F]   p-5 rounded-lg",
    },
  ];
  return (
    <div className="p-4 lg:p-12">
      <p className="font-bold pb-6">Previous Report</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {options.map((option, index) => (
          <NavLink to={option.path}>
            <div key={index} className={option.background}>
              <div className="text-white text-2xl font-bold flex flex-col items-center">
                <p>{option.value}</p>
                <p>{option.title}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="my-4">
        <label className="label">
          <span className="label-text font-bold">Select Date</span>
        </label>
        <input
          type="date"
          placeholder="Date"
          className="input w-full shadow-lg border-0 bg-white"
        />
      </div>
      <div className="text-center mt-8">
        <NavLink
          to="/dashboard/previousReportDetails"
          className="btn btn-md bg-[#323657] text-white hover:bg-[#323657] px-12 normal-case"
          type="submit"
        >
          View Your Report
        </NavLink>
      </div>
    </div>
  );
};

export default PreviousReport;
