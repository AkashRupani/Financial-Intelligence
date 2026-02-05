import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Header from "../components/navigation/Header";

const MainLayout = () => {
return (
    <div className="flex min-h-screen w-full bg-gray-100 overflow-hidden">
    <Sidebar />

    <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        <Outlet />
        </main>
    </div>
    </div>
);
};

export default MainLayout;
