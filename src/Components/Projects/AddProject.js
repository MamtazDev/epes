import React from 'react';

const AddProject = () => {
    return (
        <div>
        <div className="bg-[#323657] rounded-t-md px-[40px] flex items-center justify-between text-white">
          <p className="table_title  py-[15px]">Add Projects</p>
          <button className="btn btn-sm normal-case bg-white text-[#323657] text-[16px] hover:bg-white">
            {" "}
            Add
          </button>
        </div>
        <form className="p-5">
          <div className="my-6">
            <input
              type="text"
              placeholder="Project Title"
              className="input w-full mb-4 shadow-lg border-0"
            />
            <input
              type="date"
              placeholder="Start Date"
              className="input w-full mb-4 shadow-lg border-0"
            />
            <input
              type="date"
              placeholder="End Date"
              className="input w-full mb-4 shadow-lg border-0"
            />
          
         
            <input
              type="text"
              placeholder="assign To"
              className="assign_bg input w-full shadow-lg border-0"
            />
          </div>
        </form>
      </div>
    );
};

export default AddProject;