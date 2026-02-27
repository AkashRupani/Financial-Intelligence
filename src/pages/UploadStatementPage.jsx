import { useState } from "react";
import ConfirmImportBar from "../components/ConfirmImportBar";
import StatementSummary from "../components/StatementSummary";
import TransactionPreviewTable from "../components/TransactionPreviewTable";
import Header from "../components/navigation/Header";
import UploadFile from "../components/UploadFile"

const UploadStatementPage = () => {
    const [previewData, setPreviewData] = useState(null);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
        <Header />

        {!previewData && (
            <UploadFile onPreviewLoaded={setPreviewData} />
        )}

        {previewData && (
            <>
            <StatementSummary summary={previewData} />
            <TransactionPreviewTable transactions={previewData.transactions} />
            <ConfirmImportBar transactions={previewData.transactions} />
            </>
        )}
        </div>
    );
};

export default UploadStatementPage;