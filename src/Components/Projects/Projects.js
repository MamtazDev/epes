import React from "react";
import plus from "../../assets/family-photo/plus.png";
import AddProject from "./AddProject";
import ProjectTable from "./ProjectTable";

const Projects = () => {
  const projectTodo = [
    {
      title: "In progress",
      amount: 1,
      class:
        "text-white text-[20px] font-[600] py-[17px] px-[30px] flex justify-between bg-gradient-to-r from-[#905FF8] to-[#956FE8] rounded",
    },
    {
      title: "Done",
      amount: 3,
      class:
        "text-white text-[20px] font-[600] py-[17px] px-[30px] flex justify-between bg-gradient-to-r from-[#15AC9A] to-[#61BE93] rounded",
    },
    {
      title: "Pending",
      amount: 0,
      class:
        "text-white text-[20px] font-[600] py-[17px] px-[30px] flex justify-between bg-gradient-to-r from-[#E87E41] to-[#FFA46C] rounded",
    },
    {
      title: "Archive",
      amount: 0,
      class:
        "text-white text-[20px] font-[600] py-[17px] px-[30px] flex justify-between bg-gradient-to-r from-[#AF1945] to-[#C3336F] rounded",
    },
  ];
  return (
    <div className="p-4 lg:p-12">
      <p className="text-[#323657] text-[22px] font-[600] mb-4">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-[46px]">
        {projectTodo.map((todo, index) => (
          <div key={index} className={todo.class}>
            <p>{todo.title}</p>
            <p>{todo.amount}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] my-[60px] text-[20px] font-[500]">
        <input
          className="search_bg pl-10"
          type="search"
          placeholder="Search by name"
        />

        <select className="">
          <option>Department</option>
          <option>Graphic Design</option>
          <option>Digital Marketing</option>
          <option>Vedio & Animation</option>
          <option>Programming and Tech</option>
        </select>
      </div>

      {/* <!-- The button to open modal --> */}
      <label for="my-modal-4">
        {" "}
        <div className="text-end">
          <div className="btn btn-sm rounded border-0 bg-[#00C968] px-4  normal-case">
            <img className="mr-2" src={plus} alt="" /> Add Projects
          </div>
        </div>
      </label>

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative p-0" for="">
          <AddProject />
        </label>
      </label>
      <ProjectTable/>
    </div>
  );
};

export default Projects;
