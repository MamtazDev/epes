import React from "react";
import attach from "../../assets/logo/attach.png";

const NoticeDetails = ({ detail }) => {
  return (
    <div className="bg-white p-8 shadow rounded-lg flex flex-col gap-y-4 my-12">
      <p className="font-bold text-xl">{detail.title}</p>
      <p className="text-red-500 text-sm">{detail.date}</p>
      <p>{detail.content}</p>
      <div className="text-center">
        {/* <button
          className="btn btn-md bg-[#323657] px-6 normal-case"
          type="submit"
        >
          <img className="mr-3" src={attach} alt="" /> View attachments{" "}
        </button> */}
        {/* <!-- The button to open modal --> */}
        <label
          for="my-modal-3"
          className="btn btn-md bg-[#323657] px-6 normal-case"
        >
          <img className="mr-3" src={attach} alt="" /> View attachments{" "}
        </label>

        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="my-modal-3"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="text-lg font-bold">
            {detail.title}
            </h3>
            <p className="text-red-500 text-sm">{detail.date}</p>
            <p class="py-4">
            {detail.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;
