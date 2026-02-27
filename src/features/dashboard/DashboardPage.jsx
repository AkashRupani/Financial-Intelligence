import { useEffect, useState } from "react";
import { fetchDashboardData } from "../../services/dashboardService";
import SummaryCards from "./components/SummaryCards";
import SpendingPieChart from "./components/SpendingPieChart";
import MonthlyTrendChart from "./components/MonthlyTrendChart";
import InsightPanel from "./components/InsightPanel";
import DashboardLayout from "../../layouts/DashboardLayout";

const DashboardPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadDashboardData = async () =>{
            try{
                const dashboarddata = await fetchDashboardData();
                setData(dashboarddata);
            } catch(error){
                console.error("Error loading data")
            } finally{
                setLoading(false);
            }
        }
        loadDashboardData();
    }, []);

    if (loading) {
        return <p className="p-6">Loading dashboard…</p>;
    }

    if (!data) {
        return <p className="p-6">No data available</p>;
    }

    return (
        <DashboardLayout title="Dashboard">
        <SummaryCards summary={data.summary} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <SpendingPieChart data={data.categoryBreakdown} />
            <MonthlyTrendChart data={data.monthlyTrend} />
        </div>

        <InsightPanel insights={data.insights} />
        </DashboardLayout>
    );
};

export default DashboardPage;
