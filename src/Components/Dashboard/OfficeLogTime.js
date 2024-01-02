import React from "react";

const OfficeLogTime = () => {
  const logTime = [
    {
      date: "02/06/22",
      logTime: "06:46:50 AM",
    },
    {
      date: "02/06/22",
      logTime: "06:46:50 AM",
    },
  ];
  return (
    <div>
      <div className="bg-white my-12 rounded-md">
        <div className="bg-[#323657] rounded-t-md py-[15px] px-[40px] flex items-center text-white">
          <p className="table_title">Office log time (Campus 2 only)</p>
        </div>

        {/* table */}

        <div className="bg-white rounded-md">
      
            <div className="overflow-x-auto">
              <table className="table w-full py-[25px]">
                <tbody>
                  <tr className="tr_shadow">
                    <th>SL No.</th>
                    <th>Date</th>
                    <th>Time of fingerprint</th>
                  </tr>
                  {logTime.map((time, index) => (
                    <tr key={index} className="tr_shadow">
                      <th>{index + 1}</th>
                      <td>{time.date}</td>
                      <td>{time.logTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
       
        </div>

      </div>
    </div>
  );
};

export default OfficeLogTime;
