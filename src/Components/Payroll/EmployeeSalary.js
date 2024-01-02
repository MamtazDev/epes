import React, { useState } from "react";
import AddNumber from "../Dashboard/AddNumber";
import Pagination from "../Employees/Pagination";
import plus from "../../assets/family-photo/plus.png";
import { HiDotsVertical } from "react-icons/hi";

import edit from "../../assets/icon/edit.png";
import del from "../../assets/icon/delete.png";
import DeleteSalary from "./DeleteSalary";
import AddStaffSalary from "./AddStaffSalary";

const EmployeeSalary = () => {
  const [display, setDisplay] = useState(false);
  const [click, setClick] = useState("");
  const [page, setPage] = useState(1);
  const [amount, setAmount] = useState(3);
  const empSalary = [
    {
      empId: "OPD/ EMP/1036",
      name: "Nazmul Hasan Rifat",
      email: "mdsohidur@gmail.com",
      joinDate: "02/06/22",
      role: "Web Developer",
      salary: "30,000",
    },
    {
      empId: "OPD/ EMP/1037",
      name: "Nazmul Hasan Rifat",
      email: "mdsohidur@gmail.com",
      joinDate: "02/06/22",
      role: "Team Leader",
      salary: "30,000",
    },
    {
      empId: "OPD/ EMP/1038",
      name: "Nazmul Hasan Rifat",
      email: "mdsohidur@gmail.com",
      joinDate: "02/06/22",
      role: "iOS Developer",
      salary: "30,000",
    },
    {
      empId: "OPD/ EMP/1039",
      name: "Nazmul Hasan Rifat",
      email: "mdsohidur@gmail.com",
      joinDate: "02/06/22",
      role: "Android Developer",
      salary: "30,000",
    },
  ];

  const handleClick = (id) => {
    setClick(id);
    setDisplay(true);
  };
  const lastIndex = page * amount;
  const firstIndex = lastIndex - amount;
  const employeeSalary = empSalary.slice(firstIndex, lastIndex);
  return (
    <div className="p-4 lg:p-[56px]">
      <div className="flex justify-between">
        <p className="font-bold text-xl">Employee Salary</p>

        {/* <!-- The button to open modal --> */}
        <label
          className="btn btn-sm rounded border-0 bg-[#00C968] px-4  normal-case"
          for="link-modal"
        >
          {" "}
          <img className="mr-2" src={plus} alt="" /> Add{" "}
          <span className="hidden md:block pl-2"> Salary</span>
        </label>

        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="link-modal" class="modal-toggle" />
        <label for="link-modal" class="modal cursor-pointer">
          <label class="modal-box max-w-[636px] relative p-0 rounded-md" for="">
            <AddStaffSalary />
          </label>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-[60px] my-4 text-[20px] font-[500]">
        <input
          className="search_bg pl-10"
          type="search"
          placeholder="Search by name"
        />
        <div>
          <select className="select w-full border-0 bg-white h-[60px] rounded-[4px]">
            <option>Department</option>
            <option>Web</option>
            <option>Graphic</option>
            <option>Marketing</option>
          </select>
        </div>
      </div>

      <div>
        <div className="bg-white my-[30px] rounded-md">
          <div className="overflow-x-auto">
            <table cellspacing="1" cellpadding="1" className="table w-full">
              <tbody>
                <tr className="tr_shadow">
                  <th>Employee Id</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Join Date</th>
                  <th>Role</th>
                  <th>Salary</th>
                  <th>Payslip</th>
                  <th>Action</th>
                </tr>
                {employeeSalary.map((salary, index) => (
                  <tr key={index} className="border-0 tr_shadow py-4 ">
                    <td>{salary.empId}</td>
                    <td>{salary.name}</td>
                    <td>{salary.email}</td>
                    <td>{salary.joinDate}</td>
                    <td>{salary.role}</td>
                    <td>{salary.salary}</td>
                    <td className="font-[500] text-[14px] text-white ">
                      <span className="bg-[#323657] rounded-[4px] px-[15.5px] py-[9.5px]">
                        Generate Slip
                      </span>
                    </td>
                    <td className="relative">
                      <HiDotsVertical onClick={() => handleClick(index)} />
                      <div
                        className={
                          display && click === index
                            ? "absolute z-40 -bottom-12 -left-24 flex gap-x-4 cursor-pointer rounded-[4px] bg-white px-[20px] shadow py-[14px]"
                            : " hidden"
                        }
                      >
                        <div>
                          {/* <!-- The button to open modal --> */}
                          <label
                            className="bg-[#CCDCFA] h-[36px] w-[36px] rounded flex justify-center items-center "
                            for={index}
                          >
                            <img src={edit} alt="" />{" "}
                          </label>

                          {/* <!-- Put this part before </body> tag --> */}
                          <input
                            type="checkbox"
                            id={index}
                            class="modal-toggle"
                          />
                          <label for={index} class="modal cursor-pointer">
                            <label class="modal-box relative p-0" for="">
                              <AddStaffSalary />
                            </label>
                          </label>
                        </div>
                        <div>
                          {/* <!-- The button to open modal --> */}
                          <label
                            className="bg-[#FED9DA] h-[36px] w-[36px] rounded flex justify-center items-center"
                            for={index + "del"}
                          >
                            <img src={del} alt="" />
                          </label>

                          {/* <!-- Put this part before </body> tag --> */}
                          <input
                            type="checkbox"
                            id={index + "del"}
                            class="modal-toggle"
                          />
                          <label
                            for={index + "del"}
                            class="modal cursor-pointer"
                          >
                            <label class="modal-box relative p-0" for="">
                              <DeleteSalary />
                            </label>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        members={empSalary.length}
        amount={amount}
      />
    </div>
  );
};

export default EmployeeSalary;
