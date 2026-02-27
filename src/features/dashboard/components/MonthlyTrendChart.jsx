import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const MonthlyTrendChart = () => {
  // Mock data for now
  const data = [
    { month: "Aug", amount: 12000 },
    { month: "Sep", amount: 15000 },
    { month: "Oct", amount: 11000 },
    { month: "Nov", amount: 18000 },
    { month: "Dec", amount: 14000 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 h-[350px]">
      <h2 className="text-lg font-semibold mb-4">Monthly Spending Trend</h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `₹ ${value}`} />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyTrendChart;
