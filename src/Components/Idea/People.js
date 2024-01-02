import React from "react";

const People = () => {
  const peoples = [
    {
      name: "Md Shohidur Hasan",
      department: "Graphic Design",
    },
    {
      name: "Md Hasan Mahmud",
      department: "Digital Marketing",
    },
    {
      name: "Nazimul Mahmud",
      department: "Programming & Tech",
    },
    {
      name: "Md Shohidur Hasan",
      department: "Graphic Design",
    },
    {
      name: "Md Hasan Mahmud",
      department: "Digital Marketing",
    },
    {
      name: "Nazimul Mahmud",
      department: "Programming & Tech",
    },
  ];
  return (
    <div>
      <div className="bg-white my-12 rounded-md">
        <div className="bg-[#323657] rounded-t-md py-3 px-6 flex items-center justify-between text-white">
          <p className="font-bold">People who shared posts</p>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <tbody>
              <tr className="tr_shadow">
                <th>SL No.</th>
                <th>Name</th>
                <th>Department</th>
              </tr>
              {peoples.map((single, index) => (
                <tr key={index} className="tr_shadow hover:bg-black">
                  <th>{index + 1}</th>
                  <td>{single.name}</td>
                  <td>{single.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <p className=" absolute">View Shohidur’s posts</p> */}
        </div>
      </div>
    </div>
  );
};

export default People;
