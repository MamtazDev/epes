import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { TbEditOff } from "react-icons/tb";
import { GrView } from "react-icons/gr";
import moment from "moment/moment";
import UpdateWork from "./UpdateWork";

const TimeLine = ({ work, index ,handleDelete}) => {
  console.log(work);
  const { startingTime, endTime } = work;
  // time duration calculation with motion js
  let myStart = { startingTime };
  let myEnd = { endTime };
  function getTimeDiff(start, end) {
    console.log("start time ", start, end);
    return moment.duration(moment(end, "HH:mm").diff(moment(start, "HH:mm")));
  }

  let diff = getTimeDiff(myStart, myEnd);
  console.log(`${diff.hours()} Hour ${diff.minutes()} minutes`);

  // const handleDelete = (id) => {
  //   console.log("delete" + id);
   
  // };

  return (
    <>
      <tr className="tr_shadow">
        <th>{index + 1}</th>
        <td>{work.startingTime}</td>
        <td>
          {work.hours}h {work.minutes}m
        </td>
        <td>{work?.workType}</td>
        <td> {work?.workDetails.slice(0, 50) + "..."}</td>
        <td> </td>
        <td> </td>
        <td className="flex gap-x-2 text-">
          {/* view details modal start */}
          {/* <!-- The button to open modal --> */}
          <label for={index}>
            {" "}
            <GrView className="text-blue-600 cursor-pointer" />
          </label>
          {/* <!-- Put this part before </body> tag --> */}
          <input type="checkbox" id={index} class="modal-toggle" />
          <div class="modal">
            <div class="modal-box">
              <p class="py-4">{work?.workDetails}</p>
              <div class="modal-action">
                <label for={index} class="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
          {/*view details  modal end */}|{/*edit modal start*/}
          {/* <!-- The button to open modal --> */}
          <label for={index + "edit"}>
            <TbEditOff className="text-green-500 cursor-pointer" />
          </label>
          {/* <!-- Put this part before </body> tag --> */}
          <input type="checkbox" id={index + "edit"} class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative bg-gray-100">
              <label
                for={index + "edit"}
                class="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>

              <UpdateWork work={work}   />
            </div>
          </div>
          {/* edit modal end */}
          |
          <RiDeleteBinFill
            onClick={() => handleDelete(index)}
            className="text-red-500 cursor-pointer"
          />
        </td>
      </tr>
    </>
  );
};

export default TimeLine;
