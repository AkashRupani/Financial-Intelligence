import DashboardLayout from "../../layouts/DashboardsLayout";
import SummaryCards from "../dashboard/components/SummaryCards"
import SpendingPieChart from "./components/SpendingPieChart"
import InsightPanel from "../dashboard/components/InsightPanel"
import MonthlyTrendChart from "../dashboard/components/MonthlyTrendChart"
import { useState } from "react";

const DashboardPage = () => {
const [summary, setSummary] = useState(null);
const [categoryData, setCategoryData] = useState([]);
const [monthlyTrend, setMonthlyTrend] = useState([]);
const [insights, setInsights] = useState([]);
const [loading, setLoading] = useState(true);
    return(
        <DashboardLayout title="Dashboard">
            <SummaryCards />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <SpendingPieChart />
                <MonthlyTrendChart />
            </div>

            <InsightPanel />
        </DashboardLayout>
    )
}
export default DashboardPage;