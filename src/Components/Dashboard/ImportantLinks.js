import React, { useRef, useState } from "react";
import link from "../../assets/logo/link.png";
import edit from "../../assets/icon/edit.png";
import del from "../../assets/icon/delete.png";
import plus from "../../assets/family-photo/plus.png";
import AddLink from "./AddLink";
import UpdateLink from "./UpdateLink";
import Pagination from "../Employees/Pagination";

const ImportantLinks = () => {
  const [page, setPage] = useState(1);
  const [amount, setAmount] = useState(3);

  const Copyhandler = (e) => {
    navigator.clipboard.writeText(e);
  };

  const links = [
    {
      name: "Opedia Institute",
      description: "Main website of Opedia Institute",
      link: "https://opediainstitute.com",
    },

    {
      name: "Opedia Tech",
      description: "Main website of Opedia Tech",
      link: "https://opediatech.com",
    },
    {
      name: "Opedia Fb page",
      description: "Facebook page of Opedia ",
      link: "https://www.facebook.com/opedia",
    },
    {
      name: "Opedia  Fb group",
      description: "Facebook group of Opedia",
      link: "https://www.facebook.com/groups/opedia",
    },
    {
      name: "Explore web development",
      description: "Facebook group managed by Opedia TechWeb and Software team",
      link: "https://www.facebook.com/groups/explorewebdevelopment",
    },
    {
      name: "Opedia Institute",
      description: "Main website of Opedia Institute",
      link: "https://opediainstitute.com",
    },
  ];
  const lastIndex = page * amount;
  const firstIndex = lastIndex - amount;
  const currentLinks = links.slice(firstIndex, lastIndex);
  return (
    <div className="p-12">
      <div className="flex justify-between">
        <p className="font-bold text-xl">Important Links</p>

        {/* <!-- The button to open modal --> */}
        <label for="link-modal">
          {" "}
          <div className="btn btn-sm rounded border-0 bg-[#00C968] px-4  normal-case">
            <img className="mr-2" src={plus} alt="" />
            Add <span className="hidden md:block pl-2"> Link</span>
          </div>
        </label>

        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="link-modal" class="modal-toggle" />
        <label for="link-modal" class="modal cursor-pointer">
          <label class="modal-box relative p-0 rounded-md" for="">
            <AddLink />
          </label>
        </label>
      </div>
      <p className="text-sm text-[#747474]">You might need them</p>

      <div>
        <div className="bg-white my-12 rounded-md">
          <div className="overflow-x-auto">
            <table className="table w-full py-[25px]">
              <tbody>
                <tr className="tr_shadow">
                  <th>SL No.</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Link</th>
                  <th>Copy Link</th>
                  <th>Action</th>
                </tr>
                {currentLinks.map((important, index) => (
                  <tr key={index} className="border-0 tr_shadow">
                    <th>{index + 1}</th>
                    <td>{important.name}</td>
                    <td>{important.description}</td>
                    <td>
                      <a
                        className="underline text-blue-500"
                        href={important.link}
                      >
                        {important.link}
                      </a>
                    </td>
                    <td onClick={() => Copyhandler(important.link)}>
                      <img src={link} alt="" />
                    </td>
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
        members={links.length}
        amount={amount}
      />
    </div>
  );
};

export default ImportantLinks;
