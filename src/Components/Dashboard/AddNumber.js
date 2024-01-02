import React from 'react';

const AddNumber = () => {
    return (
        <div>
        <div className="bg-[#323657] rounded-t-md px-[40px] flex items-center justify-between text-white">
          <p className="table_title  py-[15px]">Add Number</p>
          <button className="btn btn-sm normal-case bg-white text-[#323657] text-[16px] hover:bg-white">
            {" "}
            Add
          </button>
        </div>
        
        <form className="p-5">
          <div className="my-6">
            <span className='asterisk'>

            <input
              type="text"
              placeholder="Name"
              className=" input w-full mb-4 shadow-lg border-0"
            />
            </span>
          
            <input
              type="text"
              placeholder="Department"
              className="input w-full mb-4 shadow-lg border-0"
            />
            <input
              type="email"
              placeholder="Email"
              className="input w-full mb-4 shadow-lg border-0"
            />
            <input
              type="tel"
              placeholder="Phone No"
              className="input w-full mb-4 shadow-lg border-0"
            />
          </div>
        </form>
      </div>
    );
};

export default AddNumber;