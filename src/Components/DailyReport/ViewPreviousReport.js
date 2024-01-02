import React from "react";
import Progressbar from "./Progressbar";
import ViewReport from "./ViewReport";

const ViewPreviousReport = () => {
  return (
    <div className="p-4 lg:p-12">
      <div className="text-[22px] font-[600]">
        <p className="text-[#323657]  mb-[45px] ">Previous Report</p>
        <div className="text-[#222222] mb-[60px] leading-[33px]">
          <p>Date: 02/06/22</p>
          <p>Total Duration: 9 Hours</p>
        </div>
      </div>
      <Progressbar />
      <ViewReport />
    </div>
  );
};

export default ViewPreviousReport;
