import React from "react";

const ViewReport = () => {
  return (
    <div className="bg-white rounded-md my-[60px]">
      <div className="overflow-x-auto ">
        <table className="table w-full my-[25px]">
          <tbody>
            <tr className="tr_shadow">
              <th>SL No.</th>
              <th>Timeline</th>
              <th>Duration</th>
              <th>Work Type</th>
              <th>Work Details</th>
              <th>Attachment</th>
              <th>Submit Time</th>
            </tr>

            <tr className="tr_shadow">
              <th>1</th>
              <td>9.00AM-11.00AM</td>
              <td>120 minutes</td>
              <td>Others.</td>
              <td>Facebook group check and watch cinema 4D tutorial</td>
              <td>-</td>
              <td>06:20PM</td>
            </tr>
            <tr className="tr_shadow">
              <th>2</th>
              <td>9.00AM-11.00AM</td>
              <td>120 minutes</td>
              <td>Others.</td>
              <td>Facebook group check and watch cinema 4D tutorial</td>
              <td>-</td>
              <td>06:20PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewReport;
