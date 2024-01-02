import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const EmployeeRecharts = () => {
  const data = [
    {
      name: "Sat",
      absent: 0,
      present: 40,
      amt: 2400,
    },
    {
      name: "Sun",
      absent: 17,
      present: 30,
      amt: 2210,
    },
    {
      name: "Mon",
      absent: 15,
      present: 50,
      amt: 2290,
    },
    {
      name: "Tue",
      absent: 47,
      present: 13,
      amt: 2000,
    },
    {
      name: "Wed",
      absent: 21,
      present: 30,
      amt: 2181,
    },
    {
      name: "Thu",
      absent: 50,
      present: 40,
      amt: 2500,
    },
    {
      name: "Fri",
      absent: 55,
      present: 50,
      amt: 2100,
    },
  ];
  return (
    <div>
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorabsent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F94144" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#F94144" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorpresent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#004FE8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#004FE8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="absent"
            stroke="#F94144"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorabsent)"
          />
          <Area
            type="monotone"
            dataKey="present"
            stroke="#004FE8"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorpresent)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmployeeRecharts;
