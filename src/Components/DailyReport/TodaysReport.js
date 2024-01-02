import React from "react";
import AddNewWork from "./AddNewWork";
import Progressbar from "./Progressbar";
import TimeLine from "./TimeLine";

const TodaysReport = () => {
  return (
    <div className="p-4 lg:p-12">
      <p className="font-bold pb-6">Todays Report</p>
      <Progressbar />
      <AddNewWork />
    </div>
  );
};

export default TodaysReport;
