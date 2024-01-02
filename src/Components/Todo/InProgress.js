import React from "react";
import CreateNewTask from "./CreateNewTask";
import TodoCard from "./TodoCard";

const InProgress = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#905FF8] to-[#956FE8] flex items-center justify-between gap-5 p-5 rounded-lg">
        <p className="text-white text-2xl ">In progress</p>
        <p className="text-white text-2xl ">1</p>
      </div>
      {/* <TodoCard /> */}
      <CreateNewTask />
    </div>
  );
};

export default InProgress;
