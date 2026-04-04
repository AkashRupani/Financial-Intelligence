import { useState } from "react";
import ConfirmImportBar from "../components/ConfirmImportBar";
import StatementSummary from "../components/StatementSummary";
import TransactionPreviewTable from "../components/TransactionPreviewTable";
import Header from "../components/navigation/Header";
import UploadFile from "../components/UploadFile"

const UploadStatementPage = () => {
    const [previewData, setPreviewData] = useState(null);

    const handleCategoryChange = (transactionToUpdate, category) => {
        setPreviewData((currentPreview) => {
            if (!currentPreview) return currentPreview;

            return {
                ...currentPreview,
                transactions: currentPreview.transactions.map((transaction) =>
                    transaction === transactionToUpdate
                        ? { ...transaction, category }
                        : transaction
                ),
            };
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
        <Header />

        {!previewData && (
            <UploadFile onPreviewLoaded={setPreviewData} />
        )}

        {previewData && (
            <>
            <StatementSummary summary={previewData} />
            <TransactionPreviewTable
                transactions={previewData.transactions}
                onCategoryChange={handleCategoryChange}
            />
            <ConfirmImportBar transactions={previewData.transactions} />
            </>
        )}
        </div>
    );
};

export default UploadStatementPage;
