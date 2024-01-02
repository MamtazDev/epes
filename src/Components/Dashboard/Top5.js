import React from "react";

const Top5 = () => {
  const works = [
    {
      workHome: "Others",
      time: "130 Hours 45 Minutes",
    },

    {
      workHome: "Taking class",
      time: "130 Hours 45 Minutes",
    },

    {
      workHome: "No work",
      time: "130 Hours 45 Minutes",
    },

    {
      workHome: "Prayer",
      time: "130 Hours 45 Minutes",
    },

    {
      workHome: "Meeting",
      time: "130 Hours 45 Minutes",
    },
  ];
  const kpis = [
    {
      month: "January",
      Score: 5,
    },
    {
      month: "April",
      Score: 5,
    },
    {
      month: "May",
      Score: 5,
    },
    {
      month: "February",
      Score: 5,
    },
    {
      month: "July",
      Score: 5,
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 2xl:grid-cols-2 gap-8">
      <div>
        <div className="bg-white my-12 rounded-md">
          <div className="bg-[#323657] rounded-t-md py-[15px] px-[40px] flex items-center justify-between text-white">
            <p className="table_title">
              Your top 5 time taking works of July, 2022
            </p>
          </div>
          {/* table */}

          <div className="bg-white rounded-md">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr className="tr_shadow">
                    <th>SL No.</th>
                    <th>Work Name</th>
                    <th>Time </th>
                  </tr>
                  {works.map((work, index) => (
                    <tr key={index} className="tr_shadow">
                      <th>{index + 1}</th>
                      <td>{work.workHome}</td>
                      <td>{work.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white my-12 rounded-md">
          <div className="bg-[#323657] rounded-t-md py-[15px] px-[40px] flex items-center justify-between text-white">
            <p className="table_title">Your top 5 KPI of this year</p>
          </div>
          {/* table */}

          <div className="bg-white rounded-md">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr className="tr_shadow">
                    <th>SL No.</th>
                    <th>Work Name</th>
                    <th>Time</th>
                  </tr>
                  {kpis.map((kpi, index) => (
                    <tr key={index} className="tr_shadow">
                      <th>{index + 1}</th>
                      <td>{kpi.month}</td>
                      <td>{kpi.Score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top5;
