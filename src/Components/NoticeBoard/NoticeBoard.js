import React, { useState } from "react";
import NoticeDetails from "./NoticeDetails";

const NoticeBoard = () => {
  let [notices, setNotices] = useState([]);
  const [details, setDetails] = useState([]);
 
   notices = [
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

  const handleDetails = (detail) => {
    const neweDetails = [detail]
    setDetails(neweDetails);

  };

  return (
    <div className="p-4 lg:p-12">
      <p className="text-xl font-bold mb-8">Notice Board</p>
      <div className="bg-white shadow rounded-lg p-4 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {notices.map((notice, index) => (
            <div className="shadow" key={index}>
              <div className="bg-[#323657] rounded-t-md py-2 px-6 text-white">
                <p className="text-center">{index + 1}</p>
              </div>
              <div className="flex flex-col gap-y-4 p-5">
                <p className="font-bold text-xl">{notice.title}</p>
                <p className="text-red-500 text-sm">{notice.date}</p>
                <div className="text-end">
                  <button
                    onClick={()=>handleDetails(notice)}
                    className="btn btn-md bg-[#323657] px-6 normal-case text-white hover:bg-[#323657] hover:text-white"
                    type="submit"
                  >
                    Read
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        {details.map((detail, index) => (
          <NoticeDetails key={index} detail={detail}></NoticeDetails>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
