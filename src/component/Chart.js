import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const data = [
  { name: "Leaves Left", value: 8 },
  { name: "Leaves Applied", value: 5 },
  { name: "Leaves Rejected", value: 2 },
  { name: "Leaves Approved", value: 3 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Chart() {
  return (
    <div className="container_leaves">
    <div className="leaves_left">
      <p className="leaves_heading"> Leaves</p>
      <PieChart width={220} height={250} className="leaves_chart">
        <Pie
          dataKey="value"
          data={data}
          cx={100}
          cy={120}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip/>
      </PieChart>
      </div>
      <div className="leaves_right">
      <button type="button" class="btn btn-primary apply_leave">Apply for leave</button>
      <div className="scaling">
        <div className="scale1">
           <div className="colorcircle1">
           </div>
           <p>&nbsp;&nbsp;Leaves Left</p>
        </div>
        <div className="scale1">
            <div className="colorcircle2">
           </div>
           <p>&nbsp;&nbsp;Leaves Applied</p>
        </div>
        <div className="scale1">
            <div className="colorcircle3">
           </div>
           <p>&nbsp;&nbsp;Leaves Rejected</p>
        </div>
        <div className="scale1">
           <div className="colorcircle4">
           </div>
           <p>&nbsp;&nbsp;Leaves Approved</p>
        </div>
      </div>
      </div>
     </div>
  );
}
