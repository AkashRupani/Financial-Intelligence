const TransactionRow = ({ tx }) => {
const formatDateSafe = (value) => {
  if (!value) return "-";

  // If it's an ISO string: 1926-01-30T18:30:00.000Z
  if (typeof value === "string" && value.includes("T")) {
    return value.split("T")[0]; // YYYY-MM-DD
  }

  // Fallback
  return value;
};

  return (
    <tr className="border-t">
      <td className="px-3 py-2 whitespace-nowrap text-gray-800">
        {formatDateSafe(tx.date)}
        {/* {new Date(tx.date).toLocaleDateString("en-IN")} */}
      </td>
      {console.log("TX DATE:", formatDateSafe(tx.date))}

      <td className="px-3 py-2">
        <p className="text-gray-800">{tx.description}</p>
        <p className="text-xs text-gray-400 truncate">
          {tx.rawDescription || ""}
        </p>
      </td>

      <td
        className={`px-3 py-2 text-right font-medium ${
          tx.type === "expense"
            ? "text-red-600"
            : "text-green-600"
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