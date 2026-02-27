import { useState } from "react";
import { previewCsvUpload } from "../services/uploadService";

const UploadFile = ({ onPreviewLoaded }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [fileName, setFileName] = useState("");

    const handleFile = async (file) => {
        if (!file) return;

        setLoading(true);
        setError("");
        setFileName(file.name);

        try {
        const data = await previewCsvUpload(file);
        onPreviewLoaded(data);
        } catch (err) {
        setError(
            err.response?.data?.error ||
            "We couldn’t read this file. Please upload a bank-exported CSV."
        );
        setLoading(false);
        }
    };

    const handleChange = (e) => {
        handleFile(e.target.files[0]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        handleFile(e.dataTransfer.files[0]);
    };

    return (
        <div className="max-w-xl mx-auto bg-white border rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-1">
            Upload your bank statement
        </h2>

        <p className="text-sm text-gray-500 mb-4">
            Supported formats: CSV or Excel exported directly from your bank
        </p>

        <label
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer transition
            ${
                loading
                ? "border-blue-300 bg-blue-50"
                : "border-gray-300 hover:border-blue-400"
            }
            `}
        >
            <input
            type="file"
            accept=".csv,.xls,.xlsx"
            className="hidden"
            onChange={handleChange}
            disabled={loading}
            />

            {!loading && (
            <>
                <p className="text-sm font-medium">
                Drag & drop your file here
                </p>
                <p className="text-xs text-gray-500 mt-1">
                or click to browse
                </p>
            </>
            )}

            {loading && (
            <>
                <div className="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full mb-2" />
                <p className="text-sm text-blue-700">
                Parsing {fileName}…
                </p>
            </>
            )}
        </label>

        {error && (
            <p className="mt-3 text-sm text-red-600">
            {error}
            </p>
        )}

        <div className="mt-4 text-xs text-gray-400">
            🔒 Your file is processed securely and never shared
        </div>
        </div>
    );
};

export default UploadFile;