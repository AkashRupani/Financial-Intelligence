import apiClient from "./apiClient";

export const learnVendorMappings = (transactions) => {

  return apiClient.post("/vendors/learn", {
    transactions
  });

};