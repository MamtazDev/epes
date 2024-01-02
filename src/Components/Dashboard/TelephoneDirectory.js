import React, { useState } from "react";
import plus from "../../assets/family-photo/plus.png";
import AddNumber from "./AddNumber";
import UpdateLink from "./UpdateLink";
import edit from "../../assets/icon/edit.png";
import del from "../../assets/icon/delete.png";
import Pagination from "../Employees/Pagination";

const TelephoneDirectory = () => {
  const [page, setPage] = useState(1);
  const [amount, setAmount] = useState(3);
  const directory = [
    {
      name: "Md. Shohidur 1",
      department: "Graphic Design",
      email: "mdsohidur@gmail.com",
      phone: "01731278342",
    },
    {
      name: "Md. Shohidur 2",
      department: "Graphic Design",
      email: "mdsohidur@gmail.com",
      phone: "01731278342",
    },
    {
      name: "Md. Shohidur 3",
      department: "Graphic Design",
      email: "mdsohidur@gmail.com",
      phone: "01731278342",
    },
    {
      name: "Md. Shohidur 4",
      department: "Graphic Design",
      email: "mdsohidur@gmail.com",
      phone: "01731278342",
    },
    {
      name: "Md. Shohidur 5",
      department: "Graphic Design",
      email: "mdsohidur@gmail.com",
      phone: "01731278342",
    },
    {
      name: "Md. Shohidur 6",
      department: "Graphic Design",
      email: "mdsohidur@gmail.com",
      phone: "01731278342",
    },
  ];
  const lastIndex = page * amount;
  const firstIndex = lastIndex - amount;
  const currentDirectory = directory.slice(firstIndex, lastIndex);
  return (
    <div className="p-12">
      <div className="flex justify-between">
        <p className="font-bold text-xl">Telephone Directory</p>

        {/* <!-- The button to open modal --> */}
        <label
          className="btn btn-sm rounded border-0 bg-[#00C968] px-4  normal-case"
          for="link-modal"
        >
          {" "}
          <img className="mr-2" src={plus} alt="" /> Add{" "}
          <span className="hidden md:block pl-2"> Number</span>
        </label>

        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="link-modal" class="modal-toggle" />
        <label for="link-modal" class="modal cursor-pointer">
          <label class="modal-box relative p-0 rounded-md" for="">
            <AddNumber />
          </label>
        </label>
      </div>

      <p className="text-sm text-[#747474]">You might need them</p>

      <div>
        <div className="bg-white my-12 rounded-md">
 
            <div className="overflow-x-auto">
              <table className="table w-full pt-[35px] pb-[]">
                <tbody>
                  <tr className="tr_shadow">
                    <th>SL No.</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Email</th>
                    <th>phone number</th>
                    <th>Action</th>
                  </tr>
                  {currentDirectory.map((director, index) => (
                    <tr key={index} className="border-0 tr_shadow">
                      <th>{index + 1}</th>
                      <td>{director.name}</td>
                      <td>{director.department}</td>
                      <td>{director.email}</td>
                      <td>{director.phone}</td>
                      <td className="flex gap-x-4">
                        {/* <!-- The button to open modal --> */}
                        <label
                          className="bg-[#CCDCFA] h-[36px] w-[36px] rounded flex justify-center items-center"
                          for="my-modal-4"
                        >
                          <img src={edit} alt="" />{" "}
                        </label>

                        {/* <!-- Put this part before </body> tag --> */}
                        <input
                          type="checkbox"
                          id="my-modal-4"
                          class="modal-toggle"
                        />
                        <label for="my-modal-4" class="modal cursor-pointer">
                          <label class="modal-box relative" for="">
                            <UpdateLink />
                          </label>
                        </label>
                        <div className="bg-[#FED9DA] h-[36px] w-[36px] rounded flex justify-center items-center">
                          <img src={del} alt="" />
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
        members={directory.length}
        amount={amount}
      />
    </div>
  );
};

export default TelephoneDirectory;
