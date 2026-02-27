import apiClient from "./apiClient";

export const previewCsvUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await apiClient.post("/upload/csv/preview", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};

export const confirmCsvImport = async (transactions) => {
  const res = await apiClient.post("/upload/csv/confirm", {
    transactions,
  });

  return res.data;
};
