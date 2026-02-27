const StatCard = ({ title, value, highlight }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-2">
      <span className="text-sm text-gray-500">{title}</span>
      <span
        className={`text-2xl font-bold ${
          highlight === "positive"
            ? "text-green-600"
            : highlight === "negative"
            ? "text-red-600"
            : "text-gray-800"
        }`}
      >
        {value}
      </span>
    </div>
  );
};

const SummaryCards = ({summary}) => {
  const {income, expenses, balance, savingsRate} = summary;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      <StatCard title="Current Balance" value={`₹ ${balance.toLocaleString()}`} />
      <StatCard title="Total Income" value={`₹ ${income.toLocaleString()}`} highlight="positive" />
      <StatCard title="Total Expenses" value={`₹ ${expenses.toLocaleString()}`} highlight="negative" />
      <StatCard title="Savings Rate" value={`${savingsRate}%`} />
    </div>
  );
};

export default SummaryCards;
