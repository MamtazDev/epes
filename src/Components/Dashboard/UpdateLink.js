import React from 'react';

const UpdateLink = () => {
    return (
        <div>
      <div className="bg-[#323657] rounded-t-md px-[40px] flex items-center justify-between text-white">
        <p className="table_title  py-[15px]">Edit</p>
        <button className="btn btn-sm normal-case bg-white text-[#323657] text-[16px] hover:bg-white">
          {" "}
          Update
        </button>
      </div>
      <form className="p-5">
        <div className="my-6">
          <input
            type="text"
            placeholder="Name"
            className="input w-full mb-4 shadow-lg border-0"
          />
          <textarea
            rows="4"
            className="textarea w-full mb-4 shadow-lg border-0 bg-white"
            placeholder="Description"
            required
          ></textarea>
          <input
            type="text"
            placeholder="Link"
            className="input w-full shadow-lg border-0"
          />
        </div>
      </form>
    </div>
    );
};

export default UpdateLink;