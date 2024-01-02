import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import OvertimeTableS from "./OvertimeTableS";

const Overtime = () => {
  const { register, handleSubmit } = useForm();

  const [data, setData] = useState([]);

  const onSubmit = (data1) => {
    let oldVal = [];
    oldVal.push(...data, data1);
    setData(oldVal);
    // setData([data])
    console.log(data);
  };

  return (
    <div className="p-4 lg:p-12">
      <p className="text-[22px] font-[600]">Overtime</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] py-16 ">
          <div>
            <label className="text-[16px] font-[600]">Date</label>
            <input
              {...register("date")}
              placeholder="Date"
              type="date"
              className="inputOvertime"
            />
          </div>

          <div>
            <label className="text-[16px] font-[600]">Work Requirements</label>
            <input
              {...register("workRequirements")}
              placeholder="Enter work requirements"
              className="inputOvertime"
            />
          </div>

          <div>
            <label className="text-[16px] font-[600]">From (time)</label>
            <input
              {...register("fromTime")}
              placeholder="From (time)"
              type="time"
              className="inputOvertime"
            />
          </div>

          <div>
            <label className="text-[16px] font-[600]">To (time)</label>
            <input
              {...register("toTime")}
              placeholder="To (time)"
              type="time"
              className="inputOvertime"
            />
          </div>
        </div>

        <div className="flex justify-center my-5">
          <button className="btn btn-md" type="submit">
            Add
          </button>
        </div>
      </form>
      <div>

          <div className="overflow-x-auto bg-white">
            <table className="table w-full py-[25px]">
              <tbody>
                <tr className="tr_shadow">
                  <th>Date</th>
                  <th>Work requirement</th>
                  <th>From (Time)</th>
                  <th>To (Time)</th>
                  <th>Total (Time)</th>
                  <th>Remarks </th>
                </tr>

                {data.map((singledata) => (
                  <tr className="tr_shadow">
                  <td>{singledata.date}</td>
                  <td>{singledata.workRequirements}</td>
                  <td>{singledata.fromTime}</td>
                  <td>{singledata.toTime}</td>
                  <td>-</td>
                  <td>-</td>
                 
              </tr>
                ))}
              </tbody>
            </table>
          </div>

      </div>
    </div>
  );
};

export default Overtime;
