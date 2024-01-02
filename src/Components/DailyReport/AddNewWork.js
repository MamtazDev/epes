import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import TimeLine from "./TimeLine";
import moment from "moment/moment";

const AddNewWork = () => {
  const [works, setWorks] = useState([]);

  const [fileName, setFileName] = useState(null);
  const [startTime, setStartTime] = useState("");
  const inputRef = useRef();

  const onFileChangeCapture = (e) => {
    const name = e.target.files[0].name;
    console.log(name);
    setFileName(name);
  };

  const inputHandler = () => {
    inputRef.current.click();
  };

  const startRef = useRef();

  const onStartTimeCapture = (e) => {
    const time = e.target.value;
    console.log(time);
    setStartTime(time);
  };

  const startTimeHandler = () => {
    startRef.current.click();
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (newWork) => {
    var now = newWork.startingTime;
    var then = newWork.endTime;

    var startTime = moment(now, "HH:mm:ss a");
    var endTime = moment(then, "HH:mm:ss a");
    var duration = moment.duration(endTime.diff(startTime));
    var hours = parseInt(duration.asHours());
    var minutes = parseInt(duration.asMinutes()) - hours * 60;
    const allData = { ...newWork, hours, minutes };
    let oldVal = [];
    oldVal.push(...works, allData);
    setWorks(oldVal);
  };

  const handleDelete = (index) => {
    setWorks(works.filter((i) => i.index !== index));
    console.log("delete btn clicked");
  };

  return (
    <div>
      {/* timeline table */}
      <div className="bg-white my-12 rounded-md">
        <div>
          <div className="bg-[#323657] rounded-t-md py-4 px-6 flex items-center justify-between text-white">
            <p>Timeline</p>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <tbody>
                <tr className="tr_shadow">
                  <th>SL No.</th>
                  <th>Timeline</th>
                  <th>Duration</th>
                  <th>Work type </th>
                  <th>Work Details</th>
                  <th>Attachments</th>
                  <th>Submit time</th>
                  <th>Action</th>
                </tr>

                {works.map((work, index) => (
                  <TimeLine
                    key={index}
                    index={index}
                    work={work}
                    handleDelete={handleDelete}
                  ></TimeLine>
                ))}
              </tbody>
            </table>
            {works.length !== 0 ? (
              <p></p>
            ) : (
              <p className="text-red-500 text-center font-bold pb-4">
                No entry yet
              </p>
            )}
          </div>
        </div>
      </div>
      {/* timeline table end */}

      <p className="font-bold pb-6">Add New Works</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[45px] ">
          <div>
            <label className="label">
              <span className="label-text font-bold mb-3">Starting Time</span>
            </label>
            <input
              {...register("startingTime")}
              ref={startRef}
              onChangeCapture={onStartTimeCapture}
              onClick={startTimeHandler}
              type="time"
              className=" input w-full border-0 bg-white"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-bold mb-3">
                Work type (Graphic design)
              </span>
            </label>
            <select
              {...register("workType")}
              className="select w-full border-0 bg-white"
            >
              <option>Meeting</option>
              <option>Prayer</option>
              <option>Class</option>
              <option>Workshop</option>
              <option>Seminar</option>
            </select>
          </div>

          <div>
            <label className="label">
              <span className="label-text font-bold mb-3">End Time</span>
            </label>
            <input
              {...register("endTime")}
              placeholder="To (time)"
              type="time"
              format="HH:MM A"
              className="input w-full border-0 bg-white"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-bold mb-3">Attachments</span>
            </label>
            <input
              {...register("attachment")}
              type="file"
              ref={inputRef}
              onChangeCapture={onFileChangeCapture}
              className="file-input w-full hidden  border-0 bg-white"
            />
            {fileName === null ? (
              <div
                onClick={inputHandler}
                className="border-0 bg-white rounded-lg h-[3rem] flex items-center cursor-pointer"
              >
                <span className="ml-3 py-1 px-4  rounded-lg bg-[#E0E0E0]">
                  Browse...
                </span>{" "}
                <span className="text-[#747474] ml-3">No file selected</span>
              </div>
            ) : (
              <div
                onClick={inputHandler}
                className="border-0 bg-white rounded-lg py-3"
              >
                <span className="ml-3">{fileName}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="label">
            <span className="label-text font-bold mb-3">Work Details</span>
          </label>
          <textarea
            rows="6"
            {...register("workDetails")}
            className="textarea w-full shadow border-0 bg-white"
            placeholder="Min 60 words..."
            // minLength={60}
            required
          ></textarea>
        </div>

        <div className="text-center mt-4">
          <button
            className="btn btn-md bg-[#323657] text-white hover:bg-[#323657] px-12 normal-case"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewWork;
