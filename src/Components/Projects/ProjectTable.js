import React, { useState } from "react";

const ProjectTable = () => {
 
  return (
    <div className="bg-white my-12 rounded-md">
      <div className="overflow-x-auto">
        <table className="table w-full py-[25px]">
          <tbody>
            <tr className="tr_shadow">
              <th>Employee Id</th>
              <th>Name</th>
              <th>Department</th>
              <th>Project title</th>
              <th>Start date</th>
              <th>End date </th>
              <th>Status</th>
            </tr>

            <tr className="tr_shadow">
              <th>12345</th>
              <td>Nazmul Hasan Rifat</td>
              <td>Graphic design</td>
              <td>Web portal</td>
              <td>02/06/22</td>
              <td>12/06/22 </td>
              <td className="text-[#F18D52]">Pending </td>
            </tr>
            <tr className="tr_shadow">
              <th>12345</th>
              <td>Nazmul Hasan Rifat</td>
              <td>Graphic design</td>
              <td>Web portal</td>
              <td>02/06/22</td>
              <td>12/06/22 </td>
              <td className="text-[#31B49D]">Done </td>
            </tr>
            <tr className="tr_shadow">
              <th>12345</th>
              <td>Nazmul Hasan Rifat</td>
              <td>Graphic design</td>
              <td>Web portal</td>
              <td>02/06/22</td>
              <td>12/06/22 </td>
              <td className="text-[#9161F7]">In Progress </td>
            </tr>
            <tr className="tr_shadow">
              <th>12345</th>
              <td>Nazmul Hasan Rifat</td>
              <td>Graphic design</td>
              <td>Web portal</td>
              <td>02/06/22</td>
              <td>12/06/22 </td>
              <td className="text-[#B82958]">Archive </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;
