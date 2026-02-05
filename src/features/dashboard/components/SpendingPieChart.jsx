import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

const SpendingPieChart = () => {
  // Mock data for now
  const data = [
    { category: "Food", amount: 4500 },
    { category: "Travel", amount: 2000 },
    { category: "Shopping", amount: 3500 },
    { category: "Bills", amount: 2500 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 h-[350px]">
      <h2 className="text-lg font-semibold mb-4">Spending Breakdown</h2>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `₹ ${value}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingPieChart;
