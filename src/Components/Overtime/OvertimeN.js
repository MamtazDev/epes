import React from "react";
import OverTimeTable from "./OverTimeTable";

const OvertimeN = () => {
  return (
    <div className="p-4 lg:p-12">
      <p className="font-bold text-xl text-[#323657] mb-4">Overtime</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold mb-3">Select Date</span>
            </label>
            <input
              type="date"
              placeholder="Date"
              className="input w-full shadow-lg"
            />
            <div>
              <label className="label">
                <span className="label-text font-bold mb-3">Form (time)</span>
              </label>
              <select className="select w-full">
                <option className="selected disable">Select Time</option>
                <option>8.00 AM</option>
                <option>9.00 AM</option>
                <option>10.00 AM</option>
                <option>11.00 AM</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className="form-control">
            <div>
              <label className="label">
                <span className="label-text font-bold mb-3">
                  {" "}
                  Work requirements
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter work requirements"
                className="input w-full shadow-lg"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold mb-3">To (time)</span>
              </label>
              <select className="select w-full">
                <option className="selected disable">Select Time</option>
                <option>8.00 AM</option>
                <option>9.00 AM</option>
                <option>10.00 AM</option>
                <option>11.00 AM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <button className="btn btn-md" type="submit">
          Add
        </button>
      </div>
      <OverTimeTable />
    </div>
  );
};

export default OvertimeN;
