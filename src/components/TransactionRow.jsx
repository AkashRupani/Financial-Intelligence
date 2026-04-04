const categories = [
  "Food",
  "Travel",
  "Shopping",
  "Bills",
  "Subscriptions",
  "Personal",
  "Uncategorized"
];

const formatDateSafe = (value) => {
  if (!value) return "-";

  if (typeof value === "string" && value.includes("T")) {
    return value.split("T")[0];
  }

  return value;
};

const TransactionRow = ({ tx, onCategoryChange }) => {
  const selectedCategory = tx.category || "Uncategorized";

  const handleCategoryChange = (event) => {
    onCategoryChange?.(tx, event.target.value);
  };

  return (
    <tr className="border-t">
      <td className="px-3 py-2 whitespace-nowrap text-gray-800">
        {formatDateSafe(tx.date)}
      </td>

      <td className="px-3 py-2">
        <p className="text-gray-800">{tx.description}</p>
        <p className="text-xs text-gray-400 truncate">
          {tx.rawDescription || ""}
        </p>
      </td>

      <td className="px-3 py-2">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          disabled={!onCategoryChange}
          className="w-full rounded border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 disabled:cursor-not-allowed disabled:bg-gray-100"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </td>

      <td
        className={`px-3 py-2 text-right font-medium ${
          tx.type === "expense" ? "text-red-600" : "text-green-600"
        }`}
      >
        {tx.type === "expense" ? "-" : "+"}₹{tx.amount}
      </td>

      <td className="px-3 py-2 text-right text-gray-500">
        ₹{tx.balance}
      </td>
    </tr>
  );
};

export default TransactionRow;
