import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardPage from "../features/dashboard/DashboardPage";
// import TransactionsPage from "../features/transactions/TransactionsPage";
// import AnalyticsPage from "../features/analytics/AnalyticsPage";

const AppRoutes = () => {
return (
    <BrowserRouter>
    <Routes>
        {/* Routes that require sidebar/header */}
        <Route element={<MainLayout />}>
          {/* HOME PAGE → DASHBOARD */}
        <Route path="/" element={<DashboardPage />} />

        {/* <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} /> */}
        </Route>

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </BrowserRouter>
);
};

export default AppRoutes;
