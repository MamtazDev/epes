import React, { useState } from "react";
import latestUpdate from "../../assets/logo/latest-update.png";
import telephone from "../../assets/logo/telephone.png";
import links from "../../assets/logo/links.png";
import photo from "../../assets/logo/photo.png";
import { NavLink } from "react-router-dom";
import QuoteBoost from "./QuoteBoost";
import OfficeLogTime from "./OfficeLogTime";
import Top5 from "./Top5";
import OurTeam from "./OurTeam";
import EmployeeRecharts from "../ManagementDashboard/EmployeeRecharts";
import NoticeSlider from "../ManagementDashboard/NoticeSlider";

const Dashboard = () => {


  
  let showDate = new Date();
  let displayTodaysDate =
    showDate.getDate() +
    "/" +
    (showDate.getMonth() + 1) +
    "/" +
    showDate.getFullYear();

  const options = [
    {
      picture: latestUpdate,
      title: "Latest Update",
      path: "/dashboard/latestUpdate",
      background:
        "dash bg-gradient-to-r from-[#E87E41] to-[#FFA46C]  flex items-center gap-x-4  p-4 lg:px-[34px] lg:py-6 rounded-lg",
    },
    {
      picture: telephone,
      title: "Telephone Directory",
      path: "/dashboard/telephoneDirectory",
      background:
        " dash bg-gradient-to-r from-[#15AC9A] to-[#61BE93]  flex items-center gap-x-4  p-4 lg:px-[34px] lg:py-6 rounded-lg",
    },
    {
      picture: links,
      title: "Important Links",
      path: "/dashboard/importantLink",
      background:
        "dash bg-gradient-to-r from-[#AF1945] to-[#C3336F]  flex items-center gap-x-4  p-4 lg:px-[34px] lg:py-6 rounded-lg",
    },
    {
      picture: photo,
      title: "Our Family Photo",
      path: "/dashboard/familyPhoto",
      background:
        "dash bg-gradient-to-r from-[#905FF8] to-[#956FE8] flex items-center gap-x-4  p-4 lg:px-[34px] lg:py-6 rounded-lg",
    },
  ];
  return (
    <div className="p-4 lg:px-12 py-16">
      <div className="my-4">
        <p className="text-sm pb-3">Good morning</p>
        <p className="font-bold">Today is: {displayTodaysDate}</p>
      </div>
      {/* management dashboard */}
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-12">
        <div>
          <EmployeeRecharts />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 text-[22px]">
          {options.map((option, index) => (
            <NavLink key={index} to={option.path} className={option.background}>
              <div>
                <img className="w-[84px]" src={option.picture} />
              </div>
              <div>
                <p className="text-white text-[24px]  font-[700]">
                  {option.title}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
        <div></div>
      </div>

      {/* employee dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4   gap-6 text-[22px]">
        {options.map((option, index) => (
          <NavLink to={option.path}>
            <div key={index} className={option.background}>
              <div>
                <img className="h-[84px] w-[84px]" src={option.picture} />
              </div>
              <div>
                <p className="text-white text-[24px]  font-[700]">
                  {option.title}
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      <QuoteBoost />
      <OfficeLogTime />
      <Top5 />
      <OurTeam />
      <NoticeSlider />
    </div>
  );
};

export default Dashboard;
