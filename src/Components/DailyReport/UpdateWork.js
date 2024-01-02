import React, { useRef, useState } from "react";

const UpdateWork = ({ work }) => {
  const [fileName, setFileName] = useState(null);
  const inputRef = useRef();
  const onFileChangeCapture = (e) => {
    const name = e.target.files[0].name;
    console.log(name);
    setFileName(name);
  };

  const inputHandler = () => {
    inputRef.current.click();
  };
  return (
    <div>
      <p className="font-bold pb-6">Update your Works</p>

      <form>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div>
              <label className="label">
                <span className="label-text font-bold mb-3">Starting Time</span>
              </label>
              <input
                // {...register("startingTime")}
                type="time"
                className="input w-full border-0 bg-white"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-bold mb-3">
                  Work type (Graphic design)
                </span>
              </label>
              <select
                // {...register("workType")}
                className="select w-full border-0 bg-white"
              >
                <option>Meeting</option>
                <option>Prayer</option>
                <option>Class</option>
                <option>Workshop</option>
                <option>Seminar</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label className="label">
                <span className="label-text font-bold mb-3">End Time</span>
              </label>
              <input
                // {...register("endTime")}
                placeholder="To (time)"
                type="time"
                className="input w-full border-0 bg-white"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-bold mb-3">Attachments</span>
              </label>
              <input
                // {...register("attachment")}
                ref={inputRef}
                onChangeCapture={onFileChangeCapture}
                type="file"
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
                </div>
              ) : (
                <div
                  onClick={inputHandler}
                  className="border-0 bg-white rounded-lg py-3"
                >
                  <span className="ml-3 text-sm">{fileName}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label className="label">
            <span className="label-text font-bold mb-3">Work Details</span>
          </label>
          <textarea
            rows="6"
            value={work?.workDetails}
            // {...register("workDetails")}
            className="textarea w-full shadow-lg border-0 bg-white"
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

export default UpdateWork;
