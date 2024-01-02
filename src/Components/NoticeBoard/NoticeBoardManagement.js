import React from "react";
import plus from "../../assets/family-photo/plus.png";
import edit from "../../assets/icon/edit.png";
import del from "../../assets/icon/delete.png";
import UpdateLink from "../Dashboard/UpdateLink";
import AddNotice from "./AddNotice";

const NoticeBoardManagement = () => {
 const notices = [
    {
      title: "Consectetur orci, morbi mattis elit dolor.",
      content:
        "Interdum mattis aenean diam facilisis sed risus et arcu, blandit. Amet viverra sed dignissim ut. Condimentum cras in semper elit facilisis. Velit pulvinaripsum purus varius malesuada. Massa at vitae nisl sit hac ac amet, tempus. Risus feugiat elit nec pellentesque elementum non nulla. Sagittis, porttitor venenatis lectus sit sapien dui massa. Non nec nunc massa, in diam neque enim. Diam et, at congue ornare ipsum arcu, fringilla iaculis. Enim vitae viverra diam nunc massa neque, orci.",
      date: "19/05/22, Monday",
    },
    {
      title: "Consectetur orci, morbi mattis elit dolor.",
      content:
        "Interdum mattis aenean diam facilisis sed risus et arcu, blandit. Amet viverra sed dignissim ut. Condimentum cras in semper elit facilisis. Velit pulvinaripsum purus varius malesuada. Massa at vitae nisl sit hac ac amet, tempus. Risus feugiat elit nec pellentesque elementum non nulla. Sagittis, porttitor venenatis lectus sit sapien dui massa. Non nec nunc massa, in diam neque enim. Diam et, at congue ornare ipsum arcu, fringilla iaculis. Enim vitae viverra diam nunc massa neque, orci.",
      date: "18/05/22, Monday",
    },
    {
      title: "Consectetur orci, morbi mattis elit dolor.",
      content:
        "Interdum mattis aenean diam facilisis sed risus et arcu, blandit. Amet viverra sed dignissim ut. Condimentum cras in semper elit facilisis. Velit pulvinaripsum purus varius malesuada. Massa at vitae nisl sit hac ac amet, tempus. Risus feugiat elit nec pellentesque elementum non nulla. Sagittis, porttitor venenatis lectus sit sapien dui massa. Non nec nunc massa, in diam neque enim. Diam et, at congue ornare ipsum arcu, fringilla iaculis. Enim vitae viverra diam nunc massa neque, orci.",
      date: "17/05/22, Monday",
    },
  ];
  return (
    <div className="p-4 lg:p-12">
           <div className="flex justify-between">
        <p className="font-bold text-xl">Notice Board</p>

        {/* <!-- The button to open modal --> */}
        <label for="link-modal">
          {" "}
          <div className="btn btn-sm rounded border-0 bg-[#00C968] px-4  normal-case">
            <img className="mr-2" src={plus} alt="" /> Add  {" "}
            <span className="hidden md:block pl-2">  Notice</span>
          </div>
        </label>

        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="link-modal" class="modal-toggle" />
        <label for="link-modal" class="modal cursor-pointer">
          <label class="modal-box relative p-0 rounded-md" for="">
            <AddNotice />
          </label>
        </label>
      </div>
      {notices.map((detail, index) => (
        <div key={index} className="bg-white p-8 shadow rounded-lg flex flex-col gap-y-4 my-12">
            <div className="flex justify-between">
                <div>
                    
          <p className="font-bold text-xl">{detail.title}</p>
          <p className="text-red-500 text-sm">{detail.date}</p>
                </div>
                <div className="flex gap-x-4">
                {/* <!-- The button to open modal --> */}
                <label
                  className="bg-[#CCDCFA] h-[36px] w-[36px] rounded flex justify-center items-center"
                  for="my-modal-4"
                >
                  <img src={edit} alt="" />{" "}
                </label>

                {/* <!-- Put this part before </body> tag --> */}
                <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                <label for="my-modal-4" class="modal cursor-pointer">
                  <label class="modal-box relative" for="">
                    <UpdateLink />
                  </label>
                </label>

                <div className="bg-[#FED9DA] h-[36px] w-[36px] rounded flex justify-center items-center">
                  <img src={del} alt="" />
                </div>
              </div>
            </div>
          <p>{detail.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NoticeBoardManagement;
