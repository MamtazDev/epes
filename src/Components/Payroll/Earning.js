import React, { useState } from "react";
import AddStaffSalary from "./AddStaffSalary";
import DeleteSalary from "./DeleteSalary";
import edit from "../../assets/icon/edit.png";
import del from "../../assets/icon/delete.png";
import { HiDotsVertical } from "react-icons/hi";
import plus from "../../assets/family-photo/plus.png";
import { Link } from "react-router-dom";

const Earning = () => {
  const [display, setDisplay] = useState(false);
  const [click, setClick] = useState("");
  const earnings = [
    {
      name: "Basic Salary",
      amount: 6000,
    },
    {
      name: "House Rent",
      amount: 2500,
    },
    {
      name: "Medical  Allowance",
      amount: 1000,
    },
    {
      name: "Conveyance",
      amount: 500,
    },
    {
      name: "Year End Bonus",
      amount: 1000,
    },
    {
      name: "Festive Bonus",
      amount: 1000,
    },
  ];
  const handleClick = (id) => {
    setClick(id);
    setDisplay(true);
  };
  return (
    <div className="p-4 lg:p-[56px]">
      <p className="text-[#323657] font-[600] text-[22px] mb-[53px]">
        Payroll Items
      </p>

      <div className="flex gap-[69px] text-[16px] font-[600] earning">
        <Link to="/dashboard/payrollEarning" className="earningP">
          Earnings
        </Link>
        <Link to="/dashboard/payrollDeduction">Deduction</Link>
      </div>

      <div className="text-end mt-[34px]">
        {/* <!-- The button to open modal --> */}
        <label
          className="btn btn-sm rounded border-0 bg-[#00C968] px-4  normal-case"
          for="link-modal"
        >
          {" "}
          <img className="mr-2" src={plus} alt="" /> Add{" "}
          <span className="hidden md:block pl-2"> Earnings</span>
        </label>

        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="link-modal" class="modal-toggle" />
        <label for="link-modal" class="modal cursor-pointer">
          <label class="modal-box max-w-[636px] relative p-0 rounded-md" for="">
            <AddStaffSalary />
          </label>
        </label>
      </div>
      <div className="bg-white my-[30px] rounded-md">
        <div className="overflow-x-auto">
          <table cellspacing="1" cellpadding="1" className="table w-full">
            <tbody>
              <tr className="tr_shadow">
                <th>Name</th>
                <th>Default /Unit Amount</th>
                <th>Action</th>
              </tr>
              {earnings.map((earn, index) => (
                <tr key={index} className="border-0 tr_shadow py-4 ">
                  <td>{earn.name}</td>
                  <td>{earn.amount}</td>

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
                        <label for={index + "del"} class="modal cursor-pointer">
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
  );
};

export default Earning;
