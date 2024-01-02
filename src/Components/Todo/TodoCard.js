import React from "react";

const TodoCard = (props) => {
    const {date, title, details} = props.data;
  return (
    <div className="bg-white p-4 rounded-lg shadow my-4 flex flex-col gap-y-3">
      <p className="font-bold text-xl">{title}</p>
      <p className="text-[#787878] text-sm">Date: {date}</p>
      <p>
       {details}
      </p>
  

    </div>

   
  );
};

export default TodoCard;
