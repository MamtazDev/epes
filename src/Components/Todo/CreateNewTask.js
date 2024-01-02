import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TodoCard from './TodoCard';

const CreateNewTask = () => {
  const { register, handleSubmit } = useForm();
  const [datas, setData] = useState([])
  console.log(datas);


  

  const onSubmit = (dataFromForm) => {
    let oldVal = [];
    oldVal.push(...datas, dataFromForm);
    setData(oldVal);
    // setData([dataFromForm])
  };
    return (
        <div>

          
         {
      datas.map((data, index) => <TodoCard key={index} data={data}></TodoCard>)
     }  
        
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='my-6'>
        <div
          tabIndex="0"
          className="collapse collapse-plus  bg-white rounded-box border-0"
        >
            <input type="checkbox" className="peer" /> 
          <div className="collapse-title text-xl font-medium text-[#787878]">
            Create new task
          </div>
          <div className="collapse-content">
            <input
              type="date"
              {...register("date")}
              placeholder="Start Date"
              className="input w-full my-4 shadow-lg border-0"
            />
            <input
              type="text"
              {...register("title")}
              placeholder="Title"
              className="input w-full my-4 shadow-lg border-0"
            />
            <input
            
              type="text"
              {...register("details")}
              placeholder="Short Details"
              className="input w-full my-4 shadow-lg border-0"
            />
            <div className="text-center">
              <button className="btn btn-md bg-[#323657] text-white hover:bg-[#323657]" type="submit">
                Add
              </button>
            </div>
          </div>
        </div>
      </div> 
      </form>
        </div>
    );
};

export default CreateNewTask;