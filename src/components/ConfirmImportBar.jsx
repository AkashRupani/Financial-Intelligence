import { useNavigate } from "react-router-dom";
import { confirmCsvImport } from "../services/uploadService";

const ConfirmImportBar = ({ transactions, onSuccess }) => {
    const navigate = useNavigate();

    const handleConfirm = async () => {
        try {
        await confirmCsvImport(transactions);
        navigate("/");
        } catch (err) {
        alert("Failed to save transactions");
        }
    };

    return (
        <div className="mt-4 flex justify-between items-center bg-gray-50 p-3 border">
        <span>{transactions.length} transactions ready to import</span>
        <button
            onClick={handleConfirm}
            className="bg-blue-600 text-white px-4 py-2 rounded"
        >
            Confirm Import
        </button>
        </div>
    );
};

export default ConfirmImportBar;
