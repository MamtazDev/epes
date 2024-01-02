import React, { useState } from "react";
import { Link } from "react-router-dom";
import member1 from "../../assets/team/member1.png";
import Pagination from "./Pagination";

const Employees = () => {
  const [page, setPage] = useState(1);
  const [amount, setAmount] = useState(6);

  const members = [
    {
      picture: member1,
      name: "Md. Shohidur 1",
      email: "shohidurrahman@gmail.com",
      joiningDate: "Joined 2 years ago",
    },
    {
      picture: member1,
      name: "Md. Shohidur 2",
      email: "shohidurrahman@gmail.com",
      joiningDate: "Joined 2 years ago",
    },
    {
      picture: member1,
      name: "Md. Shohidur 3",
      email: "shohidurrahman@gmail.com",
      joiningDate: "Joined 2 years ago",
    },
    {
      picture: member1,
      name: "Md. Shohidur 4",
      email: "shohidurrahman@gmail.com",
      joiningDate: "Joined 2 years ago",
    },
    {
      picture: member1,
      name: "Md. Shohidur 5",
      email: "shohidurrahman@gmail.com",
      joiningDate: "Joined 2 years ago",
    },
    {
      picture: member1,
      name: "Md. Shohidur 6",
      email: "shohidurrahman@gmail.com",
      joiningDate: "Joined 2 years ago",
    },
    {
      picture: member1,
      name: "Md. Shohidur 7",
      email: "shohidurrahman@gmail.com",
      joiningDate: "Joined 2 years ago",
    },
    {
      picture: member1,
      name: "Md. Shohidur 8",
      email: "shohidurrahman@gmail.com",
      joiningDate: "Joined 2 years ago",
    },
    {
      picture: member1,
      name: "Md. Shohidur 9",
      email: "shohidurrahman@gmail.com",
      joiningDate: "Joined 2 years ago",
    },
  ];
  const lastIndex = page * amount;
  const firstIndex = lastIndex - amount;
  const currentMembers = members.slice(firstIndex,lastIndex)
  return (
    <div className="p-12">
      <p className="text-[22px] font-[600] text-[#323657]">Employees</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] my-5 text-[20px] font-[500]">
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
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5 py-12">
        {currentMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center gap-6 bg-white rounded p-5 shadow"
          >
            <div className="avatar">
              <div className="w-[129px] rounded-full">
                <img src={member.picture} alt="member" />
              </div>
            </div>
            <div>
              <h5 className="font-bold text-xl">{member.name}</h5>
              <p className="break-words ">{member.email}</p>
              <p className="text-[13px] text-[#A4A4A4]">{member.joiningDate}</p>
              <Link
                to="/dashboard/profile"
                className="btn btn-sm normal-case bg-[#323657] text-white text-[14px] font-[500] my-[15px]"
              >
                {" "}
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} members={members.length} amount={amount}/>
    </div>
  );
};

export default Employees;
