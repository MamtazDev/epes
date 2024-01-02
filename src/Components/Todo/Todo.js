import React from "react";
import Archive from "./Archive";
import Done from "./Done";
import InProgress from "./InProgress";
import Pending from "./Pending";

const Todo = () => {
  return (
    <div className="p-4 lg:p-12">
      <p className="text-[#323657] text-[22px] font-[600] mb-4">ToDo List</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <InProgress/>
        <Done/>
        <Pending/>
        <Archive/>
      </div>
    </div>
  );
};

export default Todo;
