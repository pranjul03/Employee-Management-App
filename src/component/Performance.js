import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    score: 70,
  },
  {
    name: "Feb",
    score: 80,
  },
  {
    name: "Mar",
    score: 70,
  },
  {
    name: "Apr",
    score: 90,
  },
  {
    name: "May",
    score: 80,
  },
  {
    name: "Jun",
    score: 60,
  },
  {
    name: "Jul",
    score: 60,
  },
  {
    name: "Aug",
    score: 95,
  },
  {
    name: "Sept",
    score: 80,
  },
  {
    name: "Oct",
    score: 70,
  },
  {
    name: "Nov",
    score: 60,
  },
  {
    name: "Dec",
    score: 85,
  },
];

export default function Performance() {
  return (
      <div className="performance_container">
       <p className="performance_heading">Performance</p>
    <BarChart
      className="performance_chart"
      width={540}
      height={250}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />

      <Bar dataKey="score" fill="#81ca9d" />
    </BarChart>

    </div>
  );
}
