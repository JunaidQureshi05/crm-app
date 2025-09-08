import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Complex sales data over years (in thousands of units or revenue in $)
const salesData = [
  { year: "2015", Electronics: 120, Clothing: 90, Furniture: 60 },
  { year: "2016", Electronics: 150, Clothing: 95, Furniture: 70 },
  { year: "2017", Electronics: 180, Clothing: 110, Furniture: 80 },
  { year: "2018", Electronics: 200, Clothing: 120, Furniture: 85 },
  { year: "2019", Electronics: 220, Clothing: 130, Furniture: 90 },
  { year: "2020", Electronics: 240, Clothing: 140, Furniture: 100 },
  { year: "2021", Electronics: 260, Clothing: 150, Furniture: 110 },
  { year: "2022", Electronics: 280, Clothing: 165, Furniture: 120 },
  { year: "2023", Electronics: 300, Clothing: 180, Furniture: 130 },
  { year: "2024", Electronics: 320, Clothing: 200, Furniture: 150 },
];

// Pie chart data for latest year (2024)
const latestYearData = [
  { name: "Electronics", value: 320 },
  { name: "Clothing", value: 200 },
  { name: "Furniture", value: 150 },
];

// Colors for charts
const COLORS = ["#f39c12", "#2980b9", "#27ae60"];

const SalesInsights = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Sales Overview by Category</h2>

      {/* Line Chart */}
      <div style={{ width: "100%", height: 300, marginBottom: "50px" }}>
        <ResponsiveContainer>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value}K`} />
            <Legend />
            <Line
              type="monotone"
              dataKey="Electronics"
              stroke="#f39c12"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Clothing"
              stroke="#2980b9"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Furniture"
              stroke="#27ae60"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div style={{ width: "100%", height: 300, marginBottom: "50px" }}>
        <ResponsiveContainer>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value}K`} />
            <Legend />
            <Bar dataKey="Electronics" fill="#f39c12" />
            <Bar dataKey="Clothing" fill="#2980b9" />
            <Bar dataKey="Furniture" fill="#27ae60" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div style={{ width: "50%", height: 300, margin: "0 auto" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={latestYearData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {latestYearData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `$${value}K`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesInsights;
