const StatementSummary = ({ summary }) => {
    const { bank, transactions } = summary;

    const dates = transactions.map(t => new Date(t.date));
    const from = new Date(Math.min(...dates));
    const to = new Date(Math.max(...dates));

    return (
        <div className="bg-white border rounded p-4 mb-4 flex justify-between">
        <div>
            <p className="text-sm text-gray-500">Bank</p>
            <p className="font-medium">{bank}</p>
        </div>

        <div>
            <p className="text-sm text-gray-500">Date Range</p>
            <p className="font-medium">
            {from.toLocaleDateString()} – {to.toLocaleDateString()}
            </p>
        </div>

        <div>
            <p className="text-sm text-gray-500">Transactions</p>
            <p className="font-medium">{transactions.length}</p>
        </div>
        </div>
    );
};

export default StatementSummary;