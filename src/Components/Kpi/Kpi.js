import React from "react";

const Kpi = () => {
  return (
    <div className="p-4 lg:p-12">
      <p className="font-bold text-[#323657] text-xl">
        Key Performance Indicator
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 my-4 text-[20px] font-[500]">
        <input
          className="search_bg pl-10"
          type="search"
          placeholder="Search by name"
        />
        <input type="month" id="bdaymonth" name="bdaymonth" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 font-bold">
        <p className="bg-white p-3">Name: Nazmul Hasan</p>
        <p className="bg-white p-3">Designation:</p>
        <p className="bg-white p-3">Department: Graphic Design</p>
      </div>
      <div className="text-end">
        <select className="select w-auto">
          <option>June, 2022</option>
          <option>July, 2022</option>
          <option>August, 2022</option>
          <option>September, 2022</option>
          <option>Maggie</option>
        </select>
      </div>

      <div>
        <div className="bg-white my-12 rounded-md">
          <div className="overflow-x-auto">
            <table className="table w-full my-[25px]">
              <tbody>
                <tr className="tr_shadow">
                  <th>SL No.</th>
                  <th>Key Performance Indicator</th>
                  <th>W. of KPI</th>
                  <th>Target</th>
                  <th>Actual</th>
                  <th>Score </th>
                  <th>Total</th>
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

export default Kpi;
