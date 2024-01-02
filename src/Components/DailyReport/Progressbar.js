import React from "react";

const Progressbar = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 shadow rounded-lg">
        <p className="font-bold mb-6">Work</p>
        <div className="mb-8">
          <div className="bg-[#F6F7FF] relative h-6 w-full rounded-2xl">
            <div className="bg-gradient-to-r from-[#424C9B] to-[#323657]  absolute top-0 left-0 flex h-full w-1/2 items-center justify-center rounded-2xl text-xs font-semibold text-white">
              50%
            </div>
          </div>
        </div>
        {/* <input type="range" min="0" max="100" value="60" className="range range-md" />  */}
        {/* <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5  rounded-full" style={{width: "25%"}}></div>
            </div> */}
      </div>
      <div className="bg-white p-6 shadow rounded-lg">
        <p className="font-bold mb-6">No Work</p>
        {/* <input
          type="range"
          min="0"
          max="100"
          value="auto"
          className="range range-error range-md"
        /> */}
        <div className="mb-8">
          <div className="bg-[#FFEAE9] relative h-6 w-full rounded-2xl">
            <div className="  absolute top-0 left-0 flex h-full items-center justify-center rounded-2xl text-xs font-semibold text-[#DF5C52] pl-4">
              0%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
