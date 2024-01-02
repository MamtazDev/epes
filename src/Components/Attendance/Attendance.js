import React from "react";

const Attendance = () => {
  return (
    <div className="p-4 lg:p-12">
      <p className="font-[600] text-[#323657] text-[22px]">Attendence</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 text-[20px] font-[500]">
        <input
          className="search_bg pl-10"
          type="search"
          placeholder="Search by name"
        />

        <select className="">
          <option>Department</option>
          <option>Graphic Design</option>
          <option>Digital Marketing</option>
          <option>Vedio & Animation</option>
          <option>Programming and Tech</option>
        </select>

        <input
          placeholder="To (time)"
          type="time"
          format="HH:MM A"
          className=""
        />
      </div>

      <div>
        <div className="bg-white my-12 rounded-md">
          <div className="overflow-x-auto">
            <table className="table w-full py-[25px]">
              <tbody>
                <tr className="tr_shadow">
                  <th>Employee Id</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Working Period </th>
                </tr>

                <tr className="tr_shadow">
                  <th>1</th>
                  <td>Key Performance Indicator</td>
                  <td>W. of KPI</td>
                  <td>Target</td>
                  <td>Actual</td>
                  <td>Score </td>
                  <td>Total </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
