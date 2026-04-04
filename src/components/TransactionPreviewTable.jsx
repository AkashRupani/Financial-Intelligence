import TransactionRow from "./TransactionRow";

const TransactionPreviewTable = ({ transactions, onCategoryChange }) => {
    return (
        <div className="bg-white border rounded overflow-hidden">
        <div className="max-h-420px overflow-y-auto">
            <table className="w-full text-sm">
            <thead className="sticky top-0 bg-gray-100 text-gray-600">
                <tr>
                <th className="px-3 py-2 text-left">Date</th>
                <th className="px-3 py-2 text-left">Description</th>
                <th className="px-3 py-2 text-left">Category</th>
                <th className="px-3 py-2 text-right">Amount</th>
                <th className="px-3 py-2 text-right">Balance</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map((tx, idx) => (
                <TransactionRow
                    key={idx}
                    tx={tx}
                    onCategoryChange={onCategoryChange}
                />
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
};

export default TransactionPreviewTable;
